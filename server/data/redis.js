const { RedisClient } = require('redis');

const initData = (client) => {
    
  addTodo('R 1', true);
  addTodo('R 2', false);
  addTodo('R 3', false);
  addTodo('R 4', false);
  addTodo('R 5', false);
  addTodo('R 6', false);
  addTodo('R 7', false);
  addTodo('R 8', false);
};
export { initData };
