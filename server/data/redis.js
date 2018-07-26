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
  const raceId = await redis_client.getAsync('_id');
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
};

// advanced: use pMap
const getRaces = () => {
  if (!redis_client) {
    throw new Error('redis_client not exists. Please connect to redis first');
  }

  return redis_client.lrangeAsync(races_topic, 0, -1).then((races, error) => {
    if (!error) {
      return pMap(races, r => redis_client.hgetallAsync(r));
    }
  });
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
module.exports = { initRaces, insertRace, getRaces };
