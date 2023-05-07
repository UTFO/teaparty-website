// var testFunc = async () => {
//       console.log("Run")
//       const data = await client.db().collection('people').find({}).toArray();

//       console.log('!!!', data);
//   }

//   testFunc();

const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
 
var _db;


 
module.exports = {
  connectToServer: function (callback) {
    client.connect().then(function (db, err) {
      // Verify we got a good "db" object
      if (db)
      {
        _db = db.db("people");
        console.log("Successfully connected to MongoDB."); 
      }
      return callback(err);
         });
  },
 
  getDb: function () {
    return _db;
  },
};