const { promisify } = require('util');

let redis_client, pLRange; // passed in from server/index.js when server is starting up, saved for future use;
let race_topic = 'races';
const setClient = async client => {
  pLrange = promisify(client.lrange).bind(client);
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
    redis_client.rpush(race_topic, race_id);
  });
};

const getRaces = () => {
  if (!redis_client) {
    throw new Error('redis_client not exists. Please connect to redis first');
  }
  debugger;
  pLrange(race_topic, 0, -1).then((values, error) => {
    debugger;
    console.log(values);
  });
};

module.exports = { initRaces, getRaces };
