// we use bluebird to promisify all, so we don't need below line anymore; 
// git checkout 3619569 to see how individual methods were promisified;
const { promisify } = require('util'); 

const pWaterfall = require('p-waterfall');
const pMap = require('p-map');

let redis_client, pLRange; // passed in from server/index.js when server is starting up, saved for future use;
let races_topic = 'races';
const setClient = async client => {
  await client.flushallAsync();
  debugger;
  redis_client = client;
};
const initRaces = async client => {
  await setClient(client);
  Array.from({ length: 5 }, async (val, index) => {
    const race_id = `R:${index}`;
    const race = {
      id: race_id,
      text: `Race ${index}`,
      completed: false,
    };
    await insertRace(race);
  });
};

const insertRace = async race => {
  const { id: raceId } = race;
  //   console.log('---------------------------  hmset ', race, '           begin')
  //   await pHMSet(raceId, race);
  //   console.log('---------------------------  hmset ', race, '           completed')
  //   await pRPush(races_topic, raceId);

  redis_client.hmset(raceId, race); // this is a synchronous function;
  redis_client.rpush(races_topic, raceId); // this is a synchronous function;
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
