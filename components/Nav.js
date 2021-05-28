export default links => `
<nav>
<i class="fas fa-bars"></i>
  <ul class="hidden--moblie nav-links>
  ${links.map(
    link => `<li><a href="/${link.title}" data-navigo>${links.text}</a></li>`
  )
  .join("")}
  </ul>
</nav>
`
