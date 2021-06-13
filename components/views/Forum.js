import html from "html-literal";

export default () => html`

<div class="row">
  <div class="column">
    <h1>Welcome to my forum</h1>

   <div style="height:500px;width:500px;border:5px solid tan;font:16px/26px Georgia, Garamond, Serif;overflow:auto;">
  </div>
</div>


  <div class="column">
    <h1>Leave A Comment</h1>

    <form action="/html/tags/html_form_tag_action.cfm" method="post">
<div class="comment">
<input id="topics" list="hosting-plan" type="text">

<datalist id="hosting-plan">
    <option value="Conversation Piece"/>
    <option value="Goats"/>
    <option value="Topic Starters"/>
</datalist>
<textarea name="comments" id="comments" style="font-family:sans-serif;font-size:1.2em;color:red">
Hey... say something!
</textarea>
<input type="submit" value="Submit" style="color:blue">
</div>

</form>
  </div>
</div>
<div class="paragrah">
                <p>As someone who respects the hearts of
                    mixed martial artists. This bully stuff has always been infuriating to a large group of mixed martial artists.
                    Terrible sportmanship is the opposite
                      of what this sport is supposed to be about.</p>
        </div>
        <div class="list">
            <ul>
                <li>The Photos are example of fighters having and not having the principles that masters of the arts establish. </li>
                <li>But instead of the principles being for physical use we are going to talk about the moral aspect of it. Why is it important to conduct yourself in a manner thats approachable?</li>
                <li>Do the bad apples give new comers the knee jerk reaction to think fighters behave like animals and when they fight it is barbaric?</li>
                <li>I want you to click on the two photos and come up with a opinion for your self.</li>
            </ul>
        </div>
            <div>
                <a href="https://youtu.be/_WYrXmD-Mw0">
                    <img alt="WIN" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.FJGWmIsORCPbjfQkryEQ8QHaE8%26pid%3DApi&f=1"
                    width="250" height="170">
                 </a>
                 <p>Click On The Photos For A Link</p>
                <br>
                <a href="https://youtu.be/0tyJXwUWz2w">
                    <img alt="WIN" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.VuyaJ6JeXM70EOalINjh7gHaFj%26pid%3DApi&f=1"
                    width="250" height="170">
                </a>
            </div>
    </div>


`;


// if (submit === "title + comment + username") {
//   return submitUserComment
// } else if (submit ===! "title + comment + username") {
//   return ""
// }
