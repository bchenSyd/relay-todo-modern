# redis server
` docker run --name redis -d  -p 6379:6379 redis `
# redis-cli
` docker  run  --name redis-cli -it --link redis:redis redis redis-cli -h redis -p 6379 `
# commands
> store a todo list where each todo has `description` and `completed` fileds

```js
redis:6379> hmset todo:0  description 'buy a unicorn' completed false
OK
redis:6379> hmset todo:1  description 'use graphql in coral' completed false
OK
redis:6379> keys *
1) "todo:1"
2) "todo:0"
redis:6379> sadd todos todo:0
(integer) 1
redis:6379> sadd todos todo:1
(integer) 1
redis:6379> keys *
1) "todo:1"
2) "todo:0"
3) "todos"
redis:6379> smembers todos
1) "todo:1"
2) "todo:0"
redis:6379> hgetall todo:1
1) "description"
2) "use graphql in coral"
3) "completed"
4) "false"
```
