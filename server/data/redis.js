const initData = redis_client => {
  Array.from({ length: 5 }, (val, index) => {
    const race_id = `R:${index}`;
    redis_client.hmset(race_id, {
      id: race_id,
      text: `Race ${index}`,
      completed: false,
    });
    redis_client.lpush('races', race_id);
  });
};

module.exports = { initData };
