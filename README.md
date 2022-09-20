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

First you need to install all the dependencies with:

```
$ npm i
```

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

The TravelPal/config/config.json file contains info about my device which you should configure to correspond to your device. Than run: `npx sequelize-cli db:create` which will create the database. Once the database is created you can run the migrations with: `npx sequelize-cli db:migrate` and after that you can run the seed with: `npx sequelize-cli db:seed:all`

After that the database is set up and you can do: `npm run dev` to run the project
