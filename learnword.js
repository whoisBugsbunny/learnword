const result = document.getElementById('testresult');
var apikey = "ec59a17f-efbe-411e-a876-7a52ec2e2cbc";
var word;
let diction = [];
$.getJSON("dictiondata.json", function(obj) {
    diction = obj[0].word;
    console.log(diction);
});
async function getdata() {
    word = diction[Math.floor(Math.random() * diction.length)];
    var response = await fetch("https://dictionaryapi.com/api/v3/references/learners/json/" + word + "?key=" + apikey);
    var data = await response.json();
    if (data.length) {
        if (typeof data[0] === 'string') {
            result.innerHTML = word + " : " + "suggest: " + data[0];
        } else {
            result.innerHTML = word + " : " + data[0].shortdef;
        }
        // result.innerHTML = data[0];
    } else {
        console.log("no result found");
    }
}