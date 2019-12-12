const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/confusion';

const connect = mongoose.connect(url);

const Dishes = require('./models/dishes');

// connect.then((db)=>{

//   var newDish = Dishes({
//     name: "Idli Wada",
//     description: "South Indian dishes"
//   })

//   newDish.save()
//   .then((dish)=>{
//     console.log(dish);
//     return Dishes.find({})
//   }).then((result)=>{
//     console.log("Dishesh ", result);
//     return Dishes.updateOne({"name": "Idli Wada"}, { "description": "Updated Test" });
//   }).then((result)=>{
//     console.log("Find the dishes ", result._id);
//     return Dishes.find({})
//   }).then((result)=>{
//     console.log("Updated the dishes ", result);
//     // return Dishes.remove({})
//     return Dishes.deleteMany({})
//   }).then(()=>{
//     mongoose.connection.close();
//     // db.close();
//   }).catch((err)=>{
//     console.log(err);
//   })
// })

connect.then(()=>{
  Dishes.create({
    name: 'Uthapizza',
    description: 'Test'
  })
  .then((dish)=>{
    console.log(dish);
    return Dishes.findByIdAndUpdate(dish._id, {
      $set: {description: "South Indian Dish"}
    }, {new: true}).exec();
  })
  .then((dishes)=>{
    console.log(dishes);
    dishes.comments.push({
      rating: 4,
      comment: "Nice food",
      author: "Vishal"
    });
    return dishes.save();
  })
  .then((dishes)=>{
    console.log(dishes);
    return Dishes.deleteMany({})
  })
  .then(()=>{
    // db.close();
    mongoose.connection.close();
  })
  .catch((err)=>{
    console.log(err);
  })
})


