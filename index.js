const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017/confusion';

const dboper=require('./operation');

MongoClient.connect(url).then((db) => {
  console.log('Connected to the server');

  dboper.inserDocument(db, { name: "another", description:"testing"}, "dishes")
  .then((result) => {
    console.log("Insert document :\n", result.ops);

    return dboper.findDocuments(db, "dishes");
  })
  .then((docs) => {
      console.log("Found Documents:\n", docs);

      return dboper.updateDocument(db, {name: "Sample"}, {description: "Update test"}, "dishes");

  }).then((result) =>{
        console.log("Updated document:\n", result.result);

        return dboper.findDocuments(db, "dishes")
  })
  .then((docs) => {
          console.log("Found updated Documents:\n", docs);

       return db.dropCollection("dishes");
  })
  .then((result) => {
            console.log("Droped all Collection: ", result);
        return db.close();
  })
  .catch((error)=>console.log(error));

},(error) => console.log(error))
.catch((error)=>console.log(error));
