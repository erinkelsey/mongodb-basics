/**
 * Setup mongo client
 */
const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

const url = "mongodb://localhost:27017";

const dbName = "fruitsDB";

const client = new MongoClient(url, { useUnifiedTopology: true });

client.connect((err) => {
  assert.equal(null, err);
  console.log("connected successfully to server");

  const db = client.db(dbName);

  insertDocuments(db, () => {
    findDocuments(db, () => {
      client.close();
      console.log("connection successfully closed");
    });
  });
});

/**
 * Insert new documents into the fruits collection in the db.
 *
 * @param {String} db the database to insert documents into
 * @param {Function} callback function called when insert is complete
 */
const insertDocuments = (db, callback) => {
  const collection = db.collection("fruits");

  collection.insertMany(
    [
      {
        name: "Apple",
        score: 8,
        review: "Great fruit",
      },
      {
        name: "Orange",
        score: 6,
        review: "Not great",
      },
      {
        name: "Banana",
        score: 5,
        review: "The worst fruit",
      },
    ],
    (err, result) => {
      assert.equal(err, null);
      assert.equal(3, result.result.n);
      assert.equal(3, result.ops.length);
      console.log("inserted 3 documents into the collection");
      callback(result);
    }
  );
};

/**
 * Returns all the documents in the db for fruits collection.
 *
 * @param {String} db the database to insert documents into
 * @param {Function} callback function called when insert is complete
 */
const findDocuments = (db, callback) => {
  const collection = db.collection("fruits");

  collection.find({}).toArray((err, fruits) => {
    assert.equal(err, null);
    console.log("found the following records:");
    console.log(fruits);
    callback(fruits);
  });
};
