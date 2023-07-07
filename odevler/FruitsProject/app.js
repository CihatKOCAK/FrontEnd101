// mongod start from hyper terminal
// mongosh
// node app.js

//// Connecting to DB////
const mongoose = require('mongoose');
 
main().catch(err => console.log(err));
 
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB');
}
 
// Creating a schema (similar to collection)
const fruitSchema = new mongoose.Schema({
  name: {
    type:String,
    required:[true,"Please check your data entry, no name specified!"]
  },
  rating: {
    type:Number,
    min:1,
    max:10,
    required:true
  },
  review: String
});
 
// Creating a model under the schema//
const Fruit = mongoose.model("Fruit", fruitSchema);
 
const watermelon = new Fruit({
  name: "Watermelon",
  rating: 10,
  review: "Best fruit in the world."
});
watermelon.save();
 
// const kiwi = new Fruit ({
//   name: "Kiwi",
//   rating: 10,
//   review: "The best fruit!"
// });
 
// const orange = new Fruit({
//   name: "Orange",
//   rating: 4,
//   review: "Too sour for me"
// });
 
// const banana = new Fruit({
//   name: "Banana",
//   rating: 3,
//   review: "Weird texture"
// });

// Fruit.insertMany([kiwi, orange, banana]).then (function () {
//   console.log("Successfully saved all the fruits to fruitsDB.");
// }) .catch(function (err) {
//   console.log(err);
// });
 
 
 
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouireFruit:fruitSchema
});
 
const Person = mongoose.model("Person", personSchema);
 
// const person = new Person ({
//   name: "Amy",
//   age: 12,
//   favouireFruit:pineapple
// })

 
// person.save();

async function getFruits() {
  try {
    const fruits = await Fruit.find().exec();
    fruits.forEach(function(fruit){
      console.log(fruit.name);
    })
  } catch (err) {
    console.error(err);
  }
}

async function updatePerson() {
  try {
    await Person.updateOne({name:"John"},{favouireFruit:watermelon});
    console.log("Döküman başarıyla güncellendi.");
  } catch(err){
    console.error(err);
  }
}
updatePerson();


// async function deleteFruit() {
//   try {
//     await Fruit.deleteOne({ _id: "64a7cea9afa43a71764e2e41" });
//     console.log("Doküman başarıyla silindi.");
//   } catch (err) {
//     console.error(err);
//   }
// }
// deleteFruit();

// async function deletePerson() {
//   try {
//     await Person.deleteMany({name:"Amy"});
//     console.log("Person başarıyla silindi")
//   }
//   catch (err){
//   console.error(err);}
// }
// deletePerson();


getFruits();