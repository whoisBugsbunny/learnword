const word = document.getElementById('word');
const def = document.getElementById('definition');
const ex = document.getElementById('example');
const synon = document.getElementById('synonyms');
let diction = [];
$.getJSON("diction.json", function(obj) {
    wordarr = obj[Math.floor(Math.random() * obj.length)];
    console.log(wordarr);
    word.innerHTML = wordarr.word;
    def.innerHTML = wordarr.definition;
    ex.innerHTML = wordarr.example;
    for (let i = 0; i < wordarr.synonyms.length; i++) {
        const ele = wordarr.synonyms[i];
        $('#synonyms').append("<div class='synon'>" + ele + "</div> ");
    }
});

function closenav() {
    const pg = document.querySelector(".navpg");
    pg.classList.toggle("navclose");
}