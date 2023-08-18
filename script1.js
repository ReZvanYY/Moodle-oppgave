function blankAll() {
    document.getElementById('Tools').innerHTML = '';
    document.getElementById('HTML').innerHTML = '';
    document.getElementById('CSS').innerHTML = '';
    document.getElementById('Javascript').innerHTML = '';
    document.getElementById('Bodygame').innerHTML = '';

}


function ShowTools1() {
    blankAll();
    document.getElementById('Tools').innerHTML = /*HTML*/`
            <div class="innercard">
            De 2 viktigeste værktøyene vi skal bruke er disse:
            <ul>
                <li>
                    Koderedigeringsprogrammet
                    <a href="https://code.visualstudio.com/" target="_new">
                        Visual Sturio Code</a>
                    <br />
                    Vi skal bruke noen <i>exstentions:</i>
                    <ul>
                        <li>Javascript-booster</li>
                        <li>es6-string.html</li>
                        <li>live-server</li>
                        <li>live-sharing</li>
                    </ul>
                </li>
                <li>Nettleseren <a href="https://www.google.com/intl/no/chrome/" target="_new">
                        Google Chrome</a>
                </li>
            </ul>
        </div>
        `;
}
function ShowHTML1() {
    blankAll();
    document.getElementById('HTML').innerHTML = /*HTML*/`
    <div class="innercard">
    Vi bruker HTML til å definere et dokument.
    <ul>
        <li>Tagger for grunnleggende oppsett av en HTML-fil</li>
        <li>Tagger for grunnleggende formatering av tekst</li>
        <li><tt>&lt;div&gt;</tt></li>
        <li><tt>&lt;input type="text"&gt;</tt></li>
        <li><tt>&lt;button&gt;</tt></li>
        <li>
            <a href="https://www.w3schools.com/html/default.asp" target="_new">W3Schools HTML Tutorial</a>
        </li>
        <li>
            <a href="https://www.w3schools.com/tags/default.asp" target="_new">W3Schools HTML Reference</a>
        </li>
    </ul>
</div>
        `;
}
function ShowCSS1() {
    blankAll();
    document.getElementById('CSS').innerHTML =  /*HTML*/`
    <div class="innercard">
    Vi bruker CSS til å <i>style</i> et dokument, altså farger, fonter, utseende og lignende.
    <ul>
        <li><tt>background-color</tt></li>
        <li><tt>color</tt></li>
        <li><tt>padding</tt></li>
        <li><tt>margin</tt></li>
        <li><tt>border</tt></li>
        <li><tt>text-align</tt></li>
        <li><tt>font-size</tt></li>
        <li><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_new">Flexbox</a></li>
        <li><a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_new">Grid</a></li>
        <li>
            <a href="https://www.w3schools.com/css/default.asp" target="_new">W3Schools CSS Tutorial</a>
        </li>
        <li>
            <a href="https://www.w3schools.com/cssref/default.asp" target="_new">W3Schools CSS Reference</a>
        </li>
    </ul>
</div>
    
    `;
}
function ShowJavascript1() {
    blankAll();
    document.getElementById('Javascript').innerHTML =  /*HTML*/`
    <div class="innercard">
    Det viktigste vi skal lære er programmeringsspråket JavaScript. Vi skal lære grunnleggende å manipulere
    HTML- og
    CSS-kode på en nettside ved hjelp av JavaScript.
    <ul>
        <li>
            Det finnes en W3Schools JavaScript Tutorial, men her anbefaler vi heller å følge kurset vårt på
            Moodle.
        </li>
        <li>
            <a href="https://www.w3schools.com/jsref/default.asp" target="_new">
                W3Schools JavaScript
                Reference
            </a>
        </li>

    </ul>
</div>
    
    `;

}
function noLayout() {
    document.getElementById('Page').classList.value = '';
}
function verticalLayout1(){
    noLayout();
    document.getElementById('Page').classList.add('vertical');
}
function horizontalLayout1(){
    noLayout();
    document.getElementById('Page').classList.add('horizontal');
}
function gridLayout1(){
    noLayout();
    document.getElementById('Page').classList.add('grid');
}





function ShowBodygame1() {
    blankAll();
    document.getElementById('Bodygame').innerHTML = /*HTML*/`
            <div class="bodies">
                <div id="Head" class="bodyPart"></div>
                <div id="Body" class="bodyPart"></div>
                <div id="Legs" class="bodyPart"></div>

            </div>    
    `;
    SelectHead1();
    SelectBody1();
    SelectLegs1();

}

function SelectHead1() {
    document.getElementById('Head').innerHTML = /*HTML*/`
        <button onclick="SelectHead4()">◀</button>
        <img src="img/head1.png"/>
        <button onclick="SelectHead2()">▶</button>
        `;
}
function SelectHead2() {
    document.getElementById('Head').innerHTML = /*HTML*/`
        <button onclick="SelectHead1()">◀</button>
        <img src="img/head2.png"/>
        <button onclick="SelectHead3()">▶</button>
        `;
}
function SelectHead3() {
    document.getElementById('Head').innerHTML = /*HTML*/`
        <button onclick="SelectHead2()">◀</button>
        <img src="img/head3.png"/>
        <button onclick="SelectHead4()">▶</button>
        `;
}
function SelectHead4() {
    document.getElementById('Head').innerHTML = /*HTML*/`
        <button onclick="SelectHead3()">◀</button>
        <img src="img/head4.png"/>
        <button onclick="SelectHead1()">▶</button>
        `;
}

function SelectBody1() {
    document.getElementById('Body').innerHTML = /*HTML*/`
    <button onclick="SelectBody4()">◀</button>
        <img src="img/body1.png"/>
        <button onclick="SelectBody2()">▶</button>
        `;
}
function SelectBody2() {
    document.getElementById('Body').innerHTML = /*HTML*/`
    <button onclick="SelectBody1()">◀</button>
        <img src="img/body2.png" />
        <button onclick="SelectBody3()">▶</button>
        `;
}
function SelectBody3() {
    document.getElementById('Body').innerHTML = /*HTML*/`
    <button onclick="SelectBody2()">◀</button>
        <img src="img/body3.png" />
        <button onclick="SelectBody4()">▶</button>
        `;
}
function SelectBody4() {
    document.getElementById('Body').innerHTML = /*HTML*/`
    <button onclick="SelectBody3()">◀</button>
        <img src="img/body4.png" />
        <button onclick="SelectBody1()">▶</button>
        `;
}
function SelectLegs1() {
    document.getElementById('Legs').innerHTML = /*HTML*/`
    <button onclick="SelectLegs4()">◀</button>
        <img src="img/legs1.png" />
        <button onclick="SelectLegs2()">▶</button>
        `;
}
function SelectLegs2() {
    document.getElementById('Legs').innerHTML = /*HTML*/`
    <button onclick="SelectLegs1()">◀</button>
        <img src="img/legs2.png" />
        <button onclick="SelectLegs3()">▶</button>
        `;
}
function SelectLegs3() {
    document.getElementById('Legs').innerHTML = /*HTML*/`
    <button onclick="SelectLegs2()">◀</button>
        <img src="img/legs3.png" />
        <button onclick="SelectLegs4()">▶</button>
        `;
}
function SelectLegs4() {
    document.getElementById('Legs').innerHTML = /*HTML*/`
    <button onclick="SelectLegs3()">◀</button>
        <img src="img/legs4.png" />
        <button onclick="SelectLegs1()">▶</button>
        `;
}
