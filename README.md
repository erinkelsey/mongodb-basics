# MongoDB Basics

Collection of resources about MongoDB, including how to install, run, and perform operations.

## Install and Setup

### Install MacOSX

    $ brew tap mongodb/brew
    $ brew install mongodb-community@4.4

### Run as MacOS service

Start:

    $ brew services start mongodb-community@4.4

Stop:

    $ brew services stop mongodb-community@4.4

### Run as Background Process

Start:

    $ mongod --config /usr/local/etc/mongod.conf --fork

Stop:

To stop a mongod running as a background process, connect to the mongod from the mongo shell, and issue the shutdown command as needed.

## Mongo Shell

Start:

    $ mongo

Exit:

    > quit()

### Disable Free Monitoring

    > db.disableFreeMonitoring()

## Mongo Shell Basic Commands

### Help

    > help

### Show Databases

    > show dbs

### Create Database

    > use <db_name>

### Which DB

    > db

### Show collections in DB

    > show collections

### Delete Database

    > use <db_name>
    > db.dropDatabase()
