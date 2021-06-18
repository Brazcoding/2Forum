const express = require("express");
const Forum = require('../models/forums');

const router = express.Router();

router.post('/', (request, response) => {
  const newForum = new Forum.model(request.body);
  newForum.save((err, pizza) => {
    return err ? response.sendStatus(500).json(err) : response.json(forum)});
});
//create route

router.get('/', (request, response) => {
  Forum.model.find({}, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});
//read all route

router.get('/:id', (request, response) => {
  Forum.model.findById(request.params.id, (error, data) => {
    if (error) return response.sendStatus(500).json(error)
    return response.json(data);
  });
});
//read one route

router.delete('/:id', (request, response) => {
  Forum.model.findByIdAndRemove(request.params.id, {}, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});
//delete route

router.put('/:id', (request, response) => {
  const body = request.body;
  Forum.model.findByIdAndUpdate(
    request.params.id,
    { $set: {	ForumUser: String,
      ForumCatagory: String,
      ForumContent: String,
    } },
    (error, data) => {
      if (error) return response.sendStatus(500).json(error);
      return response.json(request.body);
    }
  );
});
//update route

module.exports = router;
