const { promisify } = require('util');
const pWaterfall = require('p-waterfall');
const pMap = require('p-map');

let redis_client, pLRange; // passed in from server/index.js when server is starting up, saved for future use;
let races_topic = 'races';
const setClient = async client => {
  const pFlushAll = promisify(client.flushall).bind(client);
  debugger;
  await pFlushAll();
  redis_client = client;
};
const initRaces = async client => {
  await setClient(client);
  Array.from({ length: 5 }, (val, index) => {
    const race_id = `R:${index}`;
    redis_client.hmset(race_id, {
      id: race_id,
      text: `Race ${index}`,
      completed: false,
    });
    redis_client.rpush(races_topic, race_id);
  });
};

const getRaces_Primitive_Ugly = () => {
  if (!redis_client) {
    throw new Error('redis_client not exists. Please connect to redis first');
  }
  const pLrange = promisify(redis_client.lrange).bind(redis_client);
  const pHGetAll = promisify(redis_client.hgetall).bind(redis_client);
  pLrange(races_topic, 0, -1).then((races, error) => {
    const race = races.map(async r => {
      const result = await pHGetAll(r);
      console.log(result);
    });
  });
};

// advanced: use pMap
const getRaces = () => {
  if (!redis_client) {
    throw new Error('redis_client not exists. Please connect to redis first');
  }
  const pLrange = promisify(redis_client.lrange).bind(redis_client);
  const pHGetAll = promisify(redis_client.hgetall).bind(redis_client);

  return pLrange(races_topic, 0, -1).then((races, error) => {
    return pMap(races, r => pHGetAll(r));
  });
};

module.exports = { initRaces, getRaces };
