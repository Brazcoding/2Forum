import { Header, Nav, Main, Footer } from "./components";
import * as state from './store';
import Navigo from "navigo";
import { capitalize } from "lodash";
import { time } from "console";
import axios from "axios";

const router = new Navigo(window.location.origin);

router
  .on({
    ":page": params => render(state[capitalize(params.page)]),
    "/": () => render(state.Home)
  })
  .resolve();

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header()}
  ${Nav(state.Links)}
  ${Main(st)}
  ${Footer()}
  `;
  router.updatePageLinks();
  addEventListeners(st.view);
}
function addEventListeners(view) {
  console.log(view)
  if (view === "Forum") {
    document.querySelector("form").addEventListener("submit", event => {
      console.log(event.target)
      event.preventDefault();
      const inputList = event.target.elements;

      const requestData = {
        ForumUser: inputList.ForumUser.value,
        ForumContent: inputList.ForumContent.value,
        ForumCatagory: inputList.ForumCatagory.value,
      };

      axios
        // .post(`https://getangrip.herokuapp.com/forum`, requestData)
        .post(`http://localhost:8080/forum`, requestData)
        .then(response => {
          state.Forum.forum.push(response.data);
          router.navigate("/forum");
        })
        .catch(error => {
          console.log("It puked", error);
        });
    });
  }
}

function fetchDataByView(st = state.Forum) {
  switch (st.view) {
    case "Forum":
      axios
        .get(`http://localhost:8080/forum`/forum)
        .then(response => {
          state[st.view].forum = response.data;
          render(st);
        })
        .catch(error => {
          console.log("It puked", error);
        });

  }
}
