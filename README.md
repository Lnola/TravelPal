# TravelPal

This is a repository for the ExtensionEngine Summercamp 2019 task. Sticking with the required theme of tourism I created a simple trip planning web app.

### Technologies:

- node.js
- express.js
- sequelize
- postgreSQL
- React

## Running the project

### Requirements

- node ~ v12
- docker (to create the database)

### Dependencies

First you need to install all the dependencies with:

```
$ npm i
```

### Database

To create the database run:

```
$ npm run db:create
```

Run the migrations with:

```
$ npm run db:migration:up
```

Seed the project with:

```
$ npm run db:seed
```

### Start

You will need two terminal windows for the client and server:

terminal window #1

```
$ npm run dev:server
```

terminal window #2

```
$ npm run dev:client
```

Alternatively, you can run the project in only one terminal window with:

```
$ npm run dev:start
```
