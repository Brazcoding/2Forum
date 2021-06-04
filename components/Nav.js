import html from "html-literal";

export default links => html`

<link
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css"
  rel="stylesheet"
/>

<div class="navbar">
<div class="baricon"><i class="fa fa-bars"></i></div>
<nav>

  <ul class="hidden--mobile">
  ${links.map(
    link => `<li><a href="${link.title}" title="${link.title}" data-navigo>${link.text}</a></li>`
  )
  .join("")}
  </ul>
  <span class="social">
    <i class="fab fa-facebook"></i>
    <i class="fab fa-instagram"></i>
    <i class="fab fa-twitter"></i>
    <i class="fab fa-github"></i>
    <i class="fab fa-discord"></i>
  </span>
</nav>
</div>
`;

// document.querySelector("fa fa-bars").addEventListener("click", () => {
//   document.querySelector("nav > ul > li").classList.toggle("hidden--mobile");
// });

// const mainMenu = document.querySelector('.mainMenu');
// const closeMenu = document.querySelector('.closeMenu');
// const baricon = document.querySelector('.baricon');


// baricon.addEventListener('click',show);
// closeMenu.addEventListener('click',show);

// function show(){
//   mainMenu.style.display = 'flex';
//   mainMenu.style.top = '0';
// }

// function close(){
//   mainMenu.style.top = '100%';
// }
