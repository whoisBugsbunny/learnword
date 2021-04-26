// const result = document.getElementById('testresult');
// const stems = document.getElementById('stems');
// var apikey1 = "ec59a17f-efbe-411e-a876-7a52ec2e2cbc";
// var apikey2 = "u3r8b0z8dgcz56efwecgjue9okj9ng7emo7o1v4t7lvtarn07";
// var word;
// let diction = [];
// $.getJSON("dictiondata.json", function(obj) {
//     diction = obj[0].word;
//     console.log(diction);
// });
// async function getdata() {
//     word = diction[Math.floor(Math.random() * diction.length)];
//     // var response = await fetch("https://dictionaryapi.com/api/v3/references/learners/json/" + word + "?key=" + apikey1);
//     var response = await fetch("https://api.wordnik.com/v4/words.json/" + word + "/definitions?api_key=" + apikey2);

//     var data = await response.json();
//     console.log(data);

//     if (data.length) {
//         if (typeof data[0] === 'string') {
//             result.innerHTML = word + " : " + "suggest: " + data[0];
//         } else {
//             result.innerHTML = word + " : " + data[0].shortdef;
//             stems.innerHTML = word + " : " + data[0].meta.stems;
//         }
//         console.log(data[0]);
//     } else {
//         console.log("no result found");
//     }
// }
// const https = require("https");
const app_id = "03bcf698";
const app_key = "8b92892f2392c6442055f67b88f0d013";
const wordId = "ace";
const fields = "pronunciations";
const strictMatch = "false";
const options = {
    host: 'od-api.oxforddictionaries.com',
    port: '443',
    path: '/api/v2/entries/en-gb/' + wordId + '?fields=' + fields + '&strictMatch=' + strictMatch,
    method: "GET",
    headers: {
        'app_id': app_id,
        'app_key': app_key
    }
};
https.get(options, (resp) => {
    let body = '';
    resp.on('data', (d) => {
        body += d;
    });
    resp.on('end', () => {
        let parsed = JSON.stringify(body);
        console.log(parsed);
    });
});