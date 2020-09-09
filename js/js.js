function PlaySound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.play();
}

function StopSound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.pause();
    thissound.currentTime = 0;
}

var x = document.getElementById("myAudio"); 

function jensLyn() { 
  x.play(); 
} 

function pauseAudio() { 
  x.pause(); 
} 


var jsDataTypes = ["String", "number", ",boolean", "undefined", "null", "symbol","object"]

//string data type
console.log("hello world")

//number data type
console.log(48);

//boolean data type
console.log(true);
console.log(false);

var test = "det er er en mega god test";
console.log(test);

//null data type
var empty = null;
console.log(empty);

//undefined data type
var apple;
console.log(apple);

//simbol data type - glem den

//objects: tThey are more advanced data types

//Array
var frugter = ["apple", "cherry", "banana", true, false, 3.14, test];
var nums = [1, 2, 3];
console.log(frugter);

//Object
var simon = {
    "name": "simon bobber hansen",
    "alder": 37,
    "job": "cykel",
    "hobby": ["apple", "cherry", "banana", true, false, 3.14, test]
}
console.log(simon)


//indeks j er = 0, i er = 5.
var sentence = "john is walking home";
console.log(sentence.indexOf("i"));