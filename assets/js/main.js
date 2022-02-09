// Augabe 1 Template Literals Lev1_1 //


let firstName = "Mercedes";
let lastName = "Wagner";
let age = 37;
let birthPlace = "Hann. Münden";
let height = 1.56;
let weigth = 52;
let hobbies = "skateboarding, surfen, yoga, reading";
let games = "Duolingo";
let food = "a lot of foods";
let sports = "look at hobbies";
let brands = "not supporting such things"
let season = "summer";
let vacationSpot = "by the sea";


let sentence1 = output1.innerHTML = "My name is " + firstName + " and I like " + food + "." + "<br>";
console.log(sentence1);

let sentence2 = output2.innerHTML = `My name is ${firstName} and I like ${food}.`
console.log(sentence2);



// Augabe 2 Template Literals Lev1_2 //

let lu = "lunatic is";
let grass = "on the grass"
let darkSide = "I'll see you on the dark side of the moon";
let hall = "in the hall";
let head = "in my head";
let door = "You lock the door";
let pb = "papeboy";
let a = "And";
let t = "The";

let line1 = `${t} ${lu} ${grass}`
let line2 = `${t} ${lu} ${hall}`
let line3 = `${t} ${lu} ${head}`



let songtext = output3.innerHTML = `
<br>
<h1>Brain Damage Songtext</h1>
${line1}<br>
${line1}<br>
Remembering games and daisy chains and laughs<br>
Got to keep the loonies on the path<br>
<br>
${line2}<br>
The lunatics are in my hall<br>
The paper holds their folded faces to the floor<br>
And every day the paperboy brings more<br>
<br>
And if the dam breaks open many years too soon<br>
And if there is no room upon the hill<br>
And if your head explodes with dark forebodings too<br>
${darkSide}<br>
<br>
${line3}<br>
${line3}<br>
You raise the blade, you make the change<br>
You rearrange me 'til I'm sane<br>
You lock the door<br>
And throw away the key<br>
There's someone in my head but it's not me<br>
<br>
And if the cloud bursts, thunder in your ear<br>
You shout and no one seems to hear<br>
And if the band you're in starts playing different tunes<br>
${darkSide}<br>
`
