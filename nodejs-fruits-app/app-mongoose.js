/**
 * Setup mongoose
 */
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

/**
 * Setup Fruit schema and model, with validation
 *
 * Validation: https://mongoosejs.com/docs/validation.html
 */
const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please check your data specified, no name provided!"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

/**
 * Setup Person schema and model
 */

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema,
});

const Person = mongoose.model("Person", personSchema);

/**
 * Insert one new Fruit
 */
const apple = new Fruit({
  name: "Apple",
  rating: 7,
  review: "Pretty solid, as a fruit.",
});
// apple.save();

/**
 * Insert one new Person, with embedded Fruit document
 */
const pineapple = new Fruit({
  name: "Pineapple",
  score: 9,
  review: "Great fruit!",
});
pineapple.save();

const person = new Person({
  name: "John",
  age: 37,
  favoriteFruit: pineapple,
});

person.save();

/**
 * Insert multiple Fruits
 */
const kiwi = new Fruit({
  name: "Kiwi",
  rating: 10,
  review: "Excellent!",
});

const orange = new Fruit({
  name: "Orange",
  rating: 3,
  review: "Alright.",
});

const banana = new Fruit({
  name: "Banana",
  rating: 5,
  review: "Ok.",
});

// Fruit.insertMany([banana, kiwi, orange], (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("all fruits saved successfully to db");
//   }
// });

/**
 * Find all Fruits
 */
Fruit.find((err, fruits) => {
  if (err) {
    console.log(err);
  } else {
    // mongoose.connection.close(); // close mongoose connection
    fruits.forEach((fruit) => {
      console.log(fruit.name);
    });
  }
});

/**
 * Update Fruit
 */
Fruit.updateOne(
  { _id: "5f769f874d8af178a44a7ee7" },
  { name: "Peach" },
  (err) => {
    if (err) console.log(err);
    else console.log("successfully updated the document");
  }
);

/**
 * Delete Fruit
 *
 * Can also use deleteMany
 */
Fruit.deleteOne({ name: "Apple" }, (err) => {
  if (err) console.log(err);
  else {
    console.log("successfully deleted the document");
    mongoose.connection.close(); // close mongoose connection
  }
});
