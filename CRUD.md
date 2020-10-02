# CRUD (Create, Read, Update, Delete) with MongoDB Shell

https://docs.mongodb.com/manual/crud/

## Create Operations

    > db.<collection>.insertOne(<object>)

Example:

    > db.products.insertOne({_id: 1, name: "Pen", price: 1.20})

NOTE: can also insert multiple with insertMany()

## Read Operations

    > db.<collection>.find(<query (optional)>, <projection (optional)>)

Query Operators: https://docs.mongodb.com/manual/reference/operator/query/#query-selectors

Example, find all:

    > db.products.find()

Example, find with query:

    > db.products.find({name: "Pencil"})
    > db.products.find({ price: {$gt: 2} })

Example, find with projection (fields to return):

    > db.products.find({ price: {$gt: 2} }, { name: 1, _id: 0 })

NOTE: 1 means include, 0 means exclude. All fields are 1 by default.

## Update Operations

    > db.<collection>.updateOne(<what_to_update>, <what_to_update_about_document>)

Example:

    > db.products.updateOne({_id: 1}, {$set: {stock: 32}})

NOTE: this will add a stock field to the document with id == 1

More operations:

- updateMany()
- replaceOne()

## Delete Operations

    > db.<collection>.deleteMany(<filter>)

NOTE: can also use deleteOne()

Example:

    > db.products.deleteOne({_id: 2})
