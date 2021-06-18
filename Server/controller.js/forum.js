const express = require("express");
const router = express.Router();
const Order = require("../models/order");
const Customer = require("../models/customer");
const Forum = require("../models/forum");

// Create a new order with customer, pizza, delivery and notes documents
router.post("/", (request, response) => {
  const body = request.body;
  // Create the sub-documents
  const customer = new Customer.model(body.customer);
  customer.save();
  const newOrder = new Order.model({});
  const forumIds = body.forum.map(forum => {
    const newForum = new Forum.model({ ...forum, order: newOrder._id });
    newForum.save();
    return newForum._id;
  });
  newOrder.forums = forumIds;
  newOrder.customer = customer._id;
  newOrder.notes = body.notes;
  newOrder.status = body.status;
  newOrder.save((error, data) => {
    return error ? response.sendStatus(500).json(error) : response.json(data);
  });
});

// Retrieve a single order with the option to not populate the sub-documents
router.get("/:id", (request, response) => {

});


// Retrieve all orders with the option to not populate the sub-documents
router.get("/", (request, response) => {

});

// Update a single orders pizza, delivery and notes sub=documents
router.put("/:id", (request, response) => {

});

// Remove a single order and it's sub-documents
router.delete("/:id", (request, response) => {

});

module.exports = router;
