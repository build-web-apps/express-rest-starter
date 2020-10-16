Starter app for REST Api built with Express / mongoose


Node js app

- mkdir nodeapp
- npm init -y // initialize the app
- npm i -s express
- npm i nodemon --save-dev // add nodemon as devDependency to watch for changes
- dynamic route / ordering example


MongoDb

- Setup follow https://docs.mongodb.com/manual/administration/install-community/
- for macOSX https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/

- brew services start mongodb-community@4.4 // start service
- brew services stop mongodb-community@4.4 // stop service
- mongo // to begin using mongoDB

- mongoimport --db simple --collection people --jsonArray users.json //Insert from terminal
- go to mongo shell
- use simple // create/select a db
- db.people.findOne() // see one entry in collection people
- db.people.remove() // to remove the collection
- db.dropDatabase() // delete a db
- show dbs

- npm i -s mongoose // install ORM mongoose
- npm i -s cors // handles CORS


References
- https://zellwk.com/blog/crud-express-mongodb/



## Reading/storiong images 

- https://stackoverflow.com/questions/44869479/what-data-type-should-i-use-to-store-an-image-with-mongodb 
