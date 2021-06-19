
const { response } = require("express");
const mongoose = require('mongoose');
const express = require("express");
const app = express();
mongoose.connect(process.env.DB_CONNECT);


const db = mongoose.connection;
let db_status = 'MongoDB connection not successful.';

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => db_status = 'Successfully opened connection to Mongo!');
app.use(express.json());



app.route("/").get((request, response) => {
  response.send("hello world");
});
app.listen(8080, () => console.log("Listening on port 8080"));


const forumSchema = new mongoose.Schema({
  ForumUser: String,
  ForumCatagory: String,
  ForumContent: String,
});

const Forum = mongoose.model('Forum', forumSchema)

app.post('/forum', (request, response) => {
  const newForum = new Forum(request.body)
  newForum.save((err, forum) => {
    return err ? response.sendStatus(500).json(err) : response.json(forum);
  });
});

app.get('/forum', (request, response) => {
  Forum.find({}, (error, data) => {
    if (error) return response.sendStatus(500).json(error)
    return response.json(data)
  })
})

app.put('/forum/:id', (request, response) => {
  Forum.findByIdAndUpdate(
    request.params.id,
    { $set: {
      "ForumUser": "Jackie Chan",
      "ForumCatagory": "News",
      "ForumContent": "We are all wishing you the best",} },
    (error, data) => {
      if (error) return response.sendStatus(500).json(error)
      return response.json(request.body)
    }
  )
})

app.delete('/forum/:id', (request, response) => {
  Forum.findByIdAndRemove(req.params.id, {}, (error, data) => {
    if (error) return response.sendStatus(500).json(error)
    return response.json(data)
  })
})
