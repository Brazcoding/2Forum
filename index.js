import { Header, Nav, Main, Footer } from "./components";
import * as state from './store';
import Navigo from "navigo";
import{ capitalize } from "lodash";
import { time } from "console";

const router = new Navigo(window.location.origin);

router
  .on({
    ":page": params => render (state[capitalize(params.page)]),
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

}

if (st.view === "Forum") {
  document.querySelector("forumButton").addEventListener("submit", event => {
    event.preventDefault();
    const inputList = event.target.elements;

    const requestData = {
    ForumUser: inputList.ForumUser.value,
    ForumContent: inputList.ForumContent.value,
    ForumCatagory: inputList.ForumCatagory.value,
    };

    axios
      .post(`https://getangrip.herokuapp.com/forum`, requestData)
      .then(response => {
        state.Forum.forum.push(response.data);
        router.navigate("/forum");
      })
      .catch(error => {
        console.log("It puked", error);
      });
  });
}

