// we use bluebird to promisify all, so we don't need below line anymore;
// git checkout 3619569 to see how individual methods were promisified;
const { promisify } = require('util');

const pWaterfall = require('p-waterfall');
const pMap = require('p-map');

let redis_client, pLRange; // passed in from server/index.js when server is starting up, saved for future use;
let races_topic = 'races';

const setClient = async client => {
  await client.flushallAsync();
  redis_client = client;
  client.set('_id', 0);
};
const initRaces = async client => {
  await setClient(client);

  /* https://stackoverflow.com/a/37576787
  ok i know why... Using Babel will transform async/await to generator function and using forEach means that
   each iteration has an individual generator function, which has nothing to do with the others. 
   so they will be executed independently and has no context of next() with others. 
   Actually, a simple for() loop also works because the iterations are also in one single generator function.
    – Demonbane Aug 15 '16 at 19:21 
  */
  for (i of Array.from({ length: 5 })) {
    await insertRace({
      text: 'Race',
      completed: false,
    });
  }

  // Array.from({ length: 5 }, async (val, index) => {
  //   const race = {
  //     text: `Race`,
  //     completed: false,
  //   };
  //   await insertRace(race);
  // });
};

const insertRace = async race => {
  const id = await redis_client.getAsync('_id');
  const raceId = `Race:${id}`;
  await redis_client.hmsetAsync(raceId, {
    ...race,
    id: raceId,
    text: `${race.text}  ${raceId}`,
  });
  await redis_client.rpushAsync(races_topic, raceId);

  //**************************************************** */
  // thread safe approach, not useful for nodejs though
  await redis_client.incrAsync('_id');
  //**************************************************** */
  return raceId;
};

// advanced: use pMap
const getRaces = (status = 'any') => {
  if (!redis_client) {
    throw new Error('redis_client not exists. Please connect to redis first');
  }

  return redis_client.lrangeAsync(races_topic, 0, -1).then((raceIds, error) => {
    if (!error) {
      return pMap(raceIds, r => redis_client.hgetallAsync(r)).then(races => {
        if (status !== 'any') {
          const completed = (status === 'completed').toString();
          return races.filter(r => r.completed === completed);
        }
        return races; // Promises are chained;
      });
    }
  });
};

const getRace = async id => {
  const race = await redis_client.hgetallAsync(id);
  return race;
};

const updateRace = (id, race) => {
  // if you are not interested in the return value, don't use Async form;
  redis_client.hmset(id, race);
};

const deleteRace = id => {
  // you don't need to use the Async form if you are not interested in the return value;
  redis_client.lrem(races_topic, 1, id);
  redis_client.del(id);
};

const getRaces_Primitive_Ugly = () => {
  if (!redis_client) {
    throw new Error('redis_client not exists. Please connect to redis first');
  }
  redis_client.lrangeAsync(races_topic, 0, -1).then((races, error) => {
    const race = races.map(async r => {
      const result = await redis_client.hgetallAsync(r);
      console.log(result);
    });
  });
};

module.exports = {
  initRaces,
  insertRace,
  getRace,
  getRaces,
  updateRace,
  deleteRace,
};
