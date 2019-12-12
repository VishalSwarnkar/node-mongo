const assert = require('assert');

// exports.inserDocument = (db, document, collection, callback) => {
//   const coll =  db.collection(collection);
//   return coll.insert(document);
// };


// exports.findDocuments = (db, collection, callback) => {
//   const coll =  db.collection(collection);
//   return coll.find({}).toArray();
// };


// exports.removeDocuments = (db, document, collection, callback) => {
//   const coll =  db.collection(collection);
//   return coll.deleteOne(document);
// };


// exports.updateDocument = (db, document, update, collection, callback) => {
//   const coll =  db.collection(collection);
//   return coll.updateOne(document, {$set: update}, null);
// };


exports.insertDocument = (db, document, collection, callback)=>{
  const coll = db.collection(collection);
  // coll.insert(document, (err, data)=>{
  //   assert.equal(err, null);
  //   console.log(`Inserted successfully ${data.result.n} documemt in to the collection ${collection}`);
  //   callback(data);
  // });
   return coll.insert(document);
};

exports.findDocuments = (db, collection, callback)=>{
  const coll = db.collection(collection);
  // coll.find({}).toArray((err, docs)=>{
  //   assert.equal(err, null);
  //   callback(docs);
  // });
  return coll.find({}).toArray();
};

exports.removeDocuments = (db, document, collection, callback)=>{
  const coll = db.collection(collection);
  // coll.deleteOne(document, (err, docs)=>{
  //   assert.equal(err, null);
  //   console.log(`Removed the document successfully ${document}`)
  //   callback(docs);
  // });
  return coll.deleteOne(document);
};

exports.updateDocument = (db, document, update, collection, callback)=>{
  const coll = db.collection(collection);
  // coll.updateOne(document, {$set: update}, null, (err, result)=>{
  //   assert.equal(err, null);
  //   console.log(`Updated the document ${update}`);
  //   callback(result);
  // });
  return coll.updateOne(document, {$set: update}, null);
};

