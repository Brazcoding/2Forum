require("dotenv").config();
const mongoose = require('mongoose')
const express = require("express");
const forum = require("./controllers/forums");
const text = require("./controllers/texts");

mongoose.connect(process.env.DB_CONNECT)
const app = express();
const db = mongoose.connection;


db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', console.log.bind(console, 'Successfully opened connection to Mongo!'));
//These lines are always at the top

const myMiddleware = (request, response, next) => {
  // do something with request and/or response
  console.log(request.method, request.path);
    next(); // tell express to move to the next middleware function
};

//convert string JSON to JavaScript Object
app.use(express.json())
app.use(myMiddleware);

app.route("/")
  .get((request, response) => {
  response.send("HELLO WORLD");
  })
  .post((request, response) => {
  response.json(request.body);
  });

  //contract of the data
  const GagForum = new mongoose.Schema({
    ForumUser: String,
    ForumCatagory: String,
    ForumContent: String,
  });

  //convert chema a model with CRUD operators
  const forums = mongoose.model('forums', GagForum)
  //create route (post)
  app.post('/forums', (request, response) => {
    const newForum = new forum(request.body)
    newForum.save((err, forums) => {
      return err ? response.sendStatus(500).json(err) : response.json(forums)
    })
  })

app.get('/forums', (request, response) => {
  forum.find({}, (error, data) => {
    if (error) return res.sendStatus(500).json(error);
    return res.json(data);
  });
});

app.get('/forums/:id', (request, response) => {
  Forum.findById(request.params.id, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});

// app.route("/pizzas/:id").get((request, response) => {
//   // express adds a "params" Object to requests
//   const id = request.params.id;
//   // handle GET request for post with an id of "id"
//   response.status(418).json({
//     id: id
//   });
// });

app.route("/**").get((request, response) => {
  response.status(404).send("NOT FOUND");
});

//This line is always LAST
const PORT = process.env.PORT || 4040;
app.listen(PORT, () => console.log("Listening on port 4040"));

