## Post Management Application
Simple application that allows you to add and remove posts which are stored in database. Server provides data (API) and database connection, while the client folder contains vue application which fetches that data (posts).

## Getting Started

Install node_modules in main folder with the server and in vue folder with the app
```
npm install
```

In config.js (server/routes/api/config.js) file change path to your own MongoDB Collection.\
If not familiar with mongo visit official website with documentation https://docs.mongodb.com/guides/server/drivers/

Run the server
```
npm start
npm run dev (starts with nodemon)
```
Jump to the client folder and run the vue app
```
npm run serve
```
Open the app 
```
http://localhost:8080/
```

If you added your MongoDB Collection correctly you should be able to add a post which will be saved in your database (and then optionally remove it).

## Used Technologies
* API and axios
* Some HTML and CSS
* JavaScript - Node and Vue