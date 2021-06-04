import html from "html-literal";

export default () => html`

<div class="row">
  <div class="column"><h1>Welcome to my forum</h1></div>
  <div class="column">
    <h1>Leave A Comment</h1>
    <form action="/html/tags/html_form_tag_action.cfm" method="post">
<div class="comment">
<textarea name="comments" id="comments" style="font-family:sans-serif;font-size:1.2em;color:red">
Hey... say something!
</textarea>
</div>
<input type="submit" value="Submit" style="color:blue">
</form>
  </div>
</div>

`;
