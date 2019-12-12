const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017/confusion';

const dbName = "confusion"
const dboper = require('./operation');

MongoClient.connect(url, (err, client)=>{
    assert.equal(err, null);

    console.log("Successfully connected to DB");

    const db = client.db(dbName);
    const collection = db.collection('dishes');

    dboper.insertDocument(db, {"name": "Uthappizza", "description": "test"}, "dishes")
    .then((results)=>{
        console.log(`Results Inserted ${JSON.stringify(results.ops)}`);
        return dboper.findDocuments(db, "dishes");
    }).then((docs)=>{
        console.log(`Find all the documents ${JSON.stringify(docs)}`);
        return dboper.updateDocument(db, {"name": "Uthappizza"}, { "description": "Updated Test" }, "dishes");
    }).then((docs)=>{
        console.log(`Updated document ${JSON.stringify(docs.result)}`);
        return dboper.findDocuments(db, "dishes");
    }).then((docs)=>{
        console.log(`Find updated documents ${JSON.stringify(docs)}`);
        return db.dropCollection("dishes");
    }).then((result)=>{
        console.log("Drop collection", JSON.stringify(result));
        client.close();
    }).catch((error)=>console.log(error));

    // dboper.insertDocument(db, {"name": "Uthappizza", "description": "test"}, "dishes", (result)=>{
    //     console.log(`Results Inserted ${JSON.stringify(result.ops)}`);

    //     dboper.findDocuments(db, "dishes", (docs)=>{
    //         console.log(`Find all the documents ${JSON.stringify(docs)}`);

    //         dboper.updateDocument(db, {"name": "Uthappizza"}, { "description": "Updated Test" }, "dishes", (docs)=>{
    //             console.log(`Updated document ${JSON.stringify(docs.result)}`);

    //             dboper.findDocuments(db, "dishes", (docs)=>{
    //                 console.log(`Find updated documents ${JSON.stringify(docs)}`);

    //                 db.dropCollection("dishes", (result)=>{
    //                     console.log("Drop collection", JSON.stringify(result));

    //                     client.close();
    //                 })
    //             })
    //         })
    //     })
    // })

    // collection.insertOne({"name": "Uthappizza", "description": "test"},
    // (err,result)=>{

    //     assert.equal(err, null);
    //     console.log("After Insert\n");
    //     console.log(result.ops);

    //     collection.find({}).toArray((err, docs)=>{
    //         assert.equal(err, null);

    //         console.log("Found \n");
    //         console.log(docs);
            
    //         db.dropCollection("dishes", (err, results)=>{
    //             assert.equal(err, null);

    //             client.close();
    //         });
    //     });
    // })
},(error) => console.log(error))
.catch((error)=>console.log(error));
