const { default: axios } = require("axios");
const { response } = require("express");
const mongoose = require('mongoose')
const forums = mongoose.model('forums', GagForum)

const GagForum = new mongoose.Schema({
  ForumUser: String,
  ForumCatagory: String,
  ForumContent: String,
});


db.posts.insert({
  ForumUser: "Sammy",
  ForumCatagory: "Topic Starters",
  ForumContent: "We have to keep trying",
})



// // function getTodos(){
// //   axios.get('/', (request, response) => {
// //     const forum = new forums(request.body);
// //     forum.save(err, forumPost) => {
// //       return err ? response.sendStatus(500).json(err) : response.json(forumPost)
// //     }
// //   })
// // }
function getTodos() {
  axios({
    method: 'get',
    url: 'http://localhost:27017'
  })
  .then(response => console.log(response.data))
  .catch(err => console.err(err));
}



// // function addTodo() {
// //   axios({
// //     method: 'post',
// //     url: 'http://localhost:4040',
// //     data: {
// //       ForumUser: 'New name',
// //       ForumCatagory:'catagory',
// //       ForumContent:'New content'
// //     }
// //   })
// // // }

// // const forums = mongoose.model('forums', GagForum)
// function testAxios(){
//   axios.get('https://baconipsum.com/api/?type=meat-and-filler').then((response) => {
//     console.log('response', response)
//     let words = response.data
//     console.log('words',words)
//   }
//   )
// }
// testAxios()
