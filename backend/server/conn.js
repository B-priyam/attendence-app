const mongoose = require("mongoose");
const url =
  "mongodb://priyam3801h:priyam123@ac-mvarxvl-shard-00-00.n0gcnuy.mongodb.net:27017,ac-mvarxvl-shard-00-01.n0gcnuy.mongodb.net:27017,ac-mvarxvl-shard-00-02.n0gcnuy.mongodb.net:27017/?ssl=true&replicaSet=atlas-uep46q-shard-0&authSource=admin&retryWrites=true&w=majority";

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((e) => {
    console.error(`Error connecting to database ${e.message}`);
  });
