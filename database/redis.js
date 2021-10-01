const redis = require("redis");
const connectRedis = require("connect-redis");
const session = require("express-session");

//create a redis store for the express session
const RedisStore = connectRedis(session);

//create a new redis client
const redisClient = redis.createClient({
  host: "localhost",
  port: 6379,
});

//if error
redisClient.on("error", function (err) {
  console.error("Could not connect to redis", err);
});

//success in connection
redisClient.on("connect", function () {
  console.log("Connected to redis");
});

module.exports = { redisClient, RedisStore, session };
