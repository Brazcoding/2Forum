import html from "html-literal";
import download from "../../Images/MuhammadAli.jpg"
import images from "../../Images/Sugar-Ray-Robinson.jpg"
import punch from "../../Images/gettyimages52811367.jpg"
import kick from "../../Images/Carl-Westergren.jpg"
import elbow from "../../Images/cobrinha.jpg"
import knee from "../../Images/Rafael-Mendes.jpg"
import tone from "../../Images/Buakaw-Banchamek.jpg"
import Gatorade from "../../Images/Badr-Hari.jpg"
import karate from "../../Images/Rubens.jpg"
export default () => html`

<h1 id="Goats">The Goats</h1>

<div class="grid-container">

<h2>Boxing</h2>

<div class="cards">
<h3 class="boxer1">Muhammad Ali</h3>
<img class="math" src="${download}">
<ul class="GalleryList">
<li>56 wins, 4 losses, 37 knockouts</li>
<li>Heavyweight Champion, 1964, 1974, 1978</li>
<li>He started boxing at the tender age of 12 in a random manner. After someone stole his bike</li>
</ul>
</div>
<div class="cards">
<h3 class="boxer2">Sugar Ray Robinson</h3>
<img class="math" src="${images}">
<ul class="GalleryList">
<li>173 wins, 19 losses, 6 draws, 2 no contests</li>
<li>Robinson held the world welterweight title from 1946 to 1951</li>
<li>Robinson had a flashy, pink convertible Cadillac for which he was well-known in New York. He also owned a club in Harlem. All that added up to his reputation as a "flamboyant" guy.</li>
</ul>
</div>
<h2 class="Wrestler1">Wrestling</h2>
<div class="cards">
<h3>Aleksandr Karelin</h3>
<img class="math101" src="${punch}">
<ul class="GalleryList">
<li> 887 wins and two losses, both by a single point.</li>
<li>Karelin won gold medals at the 1988, 1992 and 1996 Olympic Games under a different flag each time (Soviet Union, Unified Team and Russia respectively)</li>
<li>After going 13 years undefeated in international competition and six years without giving up a point, he lost 0–1 to Rulon Gardner of the United States in the final of the Sydney Olympics</li>
</ul>
</div>
<div class="cards">
<h3 class="Wrestler">Carl-Westergren</h3>
<img class="math" src="${kick}">
<ul class="GalleryList">
<li>Gold medals in Greco-Roman wrestling in 1920, 1924 and 1932</li>
<li>In 1924 he also finished sixth in freestyle wrestling.</li>
</ul>
</div>
<h2 class="Grappler">Jiu-Jitsu</h2>
<div class="cards">
<h3>Rubens Charles</h3>
<img class="math101" id="Charles" src="${elbow}">
<ul class="GalleryList">
<li>1st Place IBJJF World Championship (2006/2007/2008/2009/2017)</li>
<li>1st Place IBJJF World No-Gi Championship (2007/2008/2011/2012)</li>
<li>1st Place IBJJF Pans Championship (2007/2008/2009/2017)</li>
<li>1st Place ADCC World Championship (2013/2015/2017)</li>
<li>1st Place IBJJF European Open (2013/2017)</li>
<li>1st Place CBJJ Brazilian Nationals (2017)</li>
</ul>
</div>
<div class="cards">
<h3 class="Grappler">Rafael Mendes</h3>
<img class="math" id="Mendes" src="${knee}">
<ul class="GalleryList">
<li>1st Place IBJJF World Championship (2010 / 2011 / 2012 / 2014 / 2015 / 2016)</li>
<li>1st Place ADCC World Championship (2009 / 2011)</li>
<li>1st Place IBJJF Pans Championship (2012 / 2011)</li>
<li>1st Place IBJJF European Open (2014 / 2010 / 2009)</li>
<li>1st Place UAEJJF Abu Dhabi Pro (2010 / 2009)</li>
<li>1st Place CBJJ Brazilian Nationals (2010)</li>
<li>2nd Place IBJJF World Championship (2013)</li>
<li>2nd Place ADCC World Championship (2013)</li>
<li>2nd Place UAEJJF Abu Dhabi Pro (2011)</li>
<li>"NO GI" is simply not wearing a Gi during competition</li>
</ul>
<img class="math101" id="math808" src="${karate}">

</div>
<h2 class="Kicker">Muay Thai</h2>
<div class="cards">
<h3>Buakaw Banchamek</h3>
<img class="math" src="${tone}">
<ul class="GalleryList">
<li>228 Wins, 68 TKO’s, 23 Losses, 12 Draws</li>
<li> When Buakaw was around 7 or 8 years old, he went to see a local Muay Thai fight in his home of Bansongnong county.</li>
<li>Each morning, he wakes up at 5:30 to undergo a 5 to 10 mile run, before training. </li>
</ul>
</div>
<div class="cards">
<h3 class="Kicker">Badr Hari</h3>
<img class="math"  id="Hari" src="${Gatorade}">
<ul class="GalleryList">
<li>100 Wins, 11 Losses, </li>
<li>with 88 victories coming by way of KO or TKO</li>
</ul>
</div>
</div>`
