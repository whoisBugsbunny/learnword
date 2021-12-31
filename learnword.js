const word = document.getElementById('word');
const def = document.getElementById('definition');
const ex = document.getElementById('example');
const synonyms = document.getElementById('synonyms');
const worddiv = document.getElementById('worddiv');
const testdiv = document.getElementById('testdiv');
const navlist = document.querySelectorAll('.navlist li');
var g_word = "";
let diction = [];

function randomword() {
    $.getJSON("diction.json", function(obj) {
        // wordarr = obj[0];
        wordarr = obj[Math.floor((Math.random() * obj.length))];
        console.log(obj.length);
        console.log(wordarr);
        g_word = wordarr.word;
        word.innerHTML = wordarr.word;
        def.innerHTML = `<p>${wordarr.definition[0]}</p><p>${wordarr.definition[1]}</p>`;
        ex.innerHTML = `<p>${wordarr.example[0]}</p><p>${wordarr.example[1]}</p>`;
        synonyms.innerHTML = '';
        for (let i = 0; i < wordarr.synonyms.length; i++) {
            const ele = wordarr.synonyms[i];
            $('#synonyms').append("<div class='synon'>" + ele + "</div> ");
        }
    });
    saysynon();
}
randomword();

function closenav() {
    const pg = document.querySelector(".navpg");
    pg.classList.toggle("navclose");
}

function wordTest() {
    // worddiv.classList.toggle("d-none");
    testdiv.classList.toggle("d-none");
}
navlist.forEach(ele => {
    ele.addEventListener("click", closenav);
});
const about = document.querySelector("#about");
const wordpage = document.querySelector("#wordpage");
const allwords = document.querySelector(".allwords");

navlist[0].addEventListener("click", () => {
    worddiv.classList.remove("d-none");
    wordpage.classList.add("d-none");
    about.classList.add("d-none");
});
navlist[1].addEventListener("click", () => {
    worddiv.classList.add("d-none");
    wordpage.classList.remove("d-none");
    about.classList.add("d-none");
    $.getJSON("diction.json", function(obj) {
        wordarr = obj[Math.floor((Math.random() * obj.length))];
        allword = [];
        obj.forEach(ele => {
            allword.push(" " + ele.word);
        });
        console.log(obj.length);
        allwords.innerHTML = allword + ".";
    });
});

navlist[2].addEventListener("click", () => {
    worddiv.classList.add("d-none");
    wordpage.classList.add("d-none");
    about.classList.remove("d-none");
});
navlist[3].addEventListener("click", () => {
    console.log("not working");
});

const nextonebtn = document.querySelector('#nextonebtn');
nextonebtn.addEventListener("click", randomword);

const speakericon = document.querySelector('.speakericon');
speakericon.addEventListener("click", () => {
    window.speechSynthesis.cancel();
    var msg = new SpeechSynthesisUtterance();
    msg.text = g_word;
    window.speechSynthesis.speak(msg);
});

function saysynon() {
    setTimeout(() => {
        const synon = document.querySelectorAll('.synon');
        synon.forEach(ele => {
            ele.addEventListener("click", (e) => {
                window.speechSynthesis.cancel();
                var msg = new SpeechSynthesisUtterance();
                msg.text = ele.textContent;
                window.speechSynthesis.speak(msg);
            });
        });
    }, 500);
}