const mongoose = require("mongoose");

var mongodb = "mongodb://127.0.0.1/my_db"; //default path for mongodb
mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true }); //-> for adapting to new drivers of mongodb

let db = mongoose.connection;

db.on("error", console.error.bind(console, "Mongodb connection error"));
