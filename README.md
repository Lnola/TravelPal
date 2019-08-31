# TravelPal
This is a repository for the ExtensionEngine Summercamp 2019 task. Sticking with the required theme of tourism I created a simple trip planning web app. Technologies: node.js, express.js, sequelize, React and postgreSQL. 

To run the project you first need to install all the dependencies : ```npm install```

The TravelPal/config/config.json file contains info about my device which you should configure to correspond to your device. Than run: ```npm sequelize-cli db:create``` which will create the database. Once the database is created you can run the migrations with: ```npm sequelize-cli db:migrate``` and after that you can run the seed with: ```npm sequelize-cli db:seed:all```

After that the database is set up and you can do: ```npm run dev``` to run the project
