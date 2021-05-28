import html from "html-literal";

export default links => html`
<nav class="navigation hide">
<i class="fas fa-bars"></i>
  <ul class="nav-list">
  <span class="close-icon"><i class="fa fa-close"></i></span>
  ${links.map(
    link => `<li><a href="/${link.title}" title="${link.title}" data-navigo>${links.text}</a></li>`
  )
  .join("")}
  </ul>
</nav>
`;

