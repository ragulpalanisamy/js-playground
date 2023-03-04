/* //generate quotes
/*
let quotes = document.getElementById("h");
let text = document.getElementById("h3");
let but = document.getElementById("button");
let a = [
    {
       quote: 'Quote : Live Life when life leaves you',
       author: 'Author : Ragul'
    },
    {
       quote: 'Quote : Be yourself; everyone else is already taken.',
       author: 'Author : Oscar Wilde'
    }];

but.addEventListener("click", quote);

function quote(){
    let change = Math.floor(Math.random() * a.length);
    quotes.innerHTML = a[change].quote;
    text.innerHTML = a[change].author;
}
*/

//counter Project
/*
let count =0;

document.getElementById('lower').onclick = function(){
    count -=1;
    document.getElementById('h').innerHTML = count;
}


document.getElementById('add').onclick = function(){
    count +=1;
    document.getElementById('h').innerHTML = count;
}
*/
/*
function ChangeColor(color){
    let container = document.getElementById("container");
    container.style.backgroundColor = color;
}
*/
/*
var weight = window.prompt("enter the weight");
let height = window.prompt("enter the height");
let measure = window.prompt("enter the measure");
let bmi = window.prompt("enter the bmi");
let error;

function calculate() {
	//weight = document.getElementById("weight").value;
	//height = document.getElementById("height").value;
	error = "Please enter some values";
	height /= 100;
	height *= height;
	bmi = weight/height;
	bmi = bmi.toFixed(1);

	if (bmi <= 18.4) {
		measure = "Your BMI is " + bmi + " which means " + "you are Underweight";
	} else if (bmi >= 18.5 && bmi <= 24.9) {
		measure = "Your BMI is " + bmi + " which means " + "You are Normal";
	} else if (bmi >= 25 && bmi <= 29.9) {
		measure = "Your BMI is " + bmi + " which means " + "You are Overweight";
	} else if (bmi >= 30) {
		measure = "Your BMI is " + bmi + " which means " + "You are Obese";
	}
	

	if (weight === 0 ) {
		document.getElementById("results").innerHTML = error;
	} else if (height === 0){
		document.getElementById("results").innerHTML = error;
	}
	 else {

		document.getElementById("results").innerHTML = measure;
	}
	if (weight < 0) {
		document.getElementById("results").innerHTML = "Negative Values not Allowed";
	}
}
*/
//class & Object.
/*
class fruits{
	constructor(name,color)
	{
		this.name = name;
		this.color = color;
	}
		sweet() {

			console.log(`Fruit Name : ${this.name}`);
			console.log(`Fruit color : ${this.color}`);
			console.log("Solid sweet with rich carbohydrate");
		
		}
	
}
	class apple extends fruits {
		//name='apple';
		//color='red';
		
	}


let appl = new fruits('apple','red');
console.log(appl.name);
appl.sweet();
*/
//stopwatch
/*
window.onload = function () {
  
	var seconds = 00; 
	var tens = 00; 
	var appendTens = document.getElementById("tens")
	var appendSeconds = document.getElementById("seconds")
	var buttonStart = document.getElementById('start');
	var buttonStop = document.getElementById('stop');
	var buttonReset = document.getElementById('reset');
	var Interval ;
  
	buttonStart.onclick = function() {
	  
	  clearInterval(Interval);
	   Interval = setInterval(startTimer, 10);
	}
	
	  buttonStop.onclick = function() {
		 clearInterval(Interval);
	}
	
  
	buttonReset.onclick = function() {
	   clearInterval(Interval);
	  tens = "00";
		seconds = "00";
	  appendTens.innerHTML = tens;
		appendSeconds.innerHTML = seconds;
	}
	
	 
	
	function startTimer () {
	  tens++; 
	  
	  if(tens <= 9){
		appendTens.innerHTML = "0" + tens;
	  }
	  
	  if (tens > 9){
		appendTens.innerHTML = tens;
		
	  } 
	  
	  if (tens > 99) {
		console.log("seconds");
		seconds++;
		appendSeconds.innerHTML = "0" + seconds;
		tens = 0;
		appendTens.innerHTML = "0" + 0;
	  }
	  
	  if (seconds > 9){
		appendSeconds.innerHTML = seconds;
	  }
	
	}
  }
*/
/*
let circle = document.getElementById("circle");
let square = document.getElementById("square");
let rect = document.getElementById("rect");
let tri = document.getElementById("tri");


circle.onclick = function(){
	circle.style.display = "none";
}
square.onclick = function(){
	square.style.display = "none";
}
rect.onclick = function(){
	rect.style.display = "none";
}
tri.onclick = function(){
	tri.style.display = "none";
}

document.getElementById("dis").onclick = function(){
	tri.style.display = "";
	rect.style.display = "";
	square.style.display = "";
	circle.style.display = "";
}
*/
/*
function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();
/*
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
    links.classList.toggle("show-links");
});

 */
//window

console.log(window);

//window.open();

//window.close();
//window.moveTo();

//window.AnimationEffect();
/*console.log(navigator.cookieEnabled);
console.log(navigator.onLine);
console.log(navigator.appName);
console.log(navigator.platform);
console.log(navigator.language);
console.log(window.location.href);
console.log(window.location.hostname);
console.log(window.location.protocol);
console.log(navigator.vibrate(1000));

let a = prompt("enter Yes/No");


if(a = 'Yes'){
	console.log(navigator.vibrate(1000));
}
else{
console.log("Vibration API is not supported in your browser");
}
*/
/*
$(document).ready(function() {

	var magic8Ball = {};
	magic8Ball.listOfAnswers = ["No", "Yes", "I don't think so...", "Of course!", "Indubitably", "In your dreams."];
  
	$("#answer").hide();
  
	magic8Ball.askQuestion = function(question) {
	  $("#8ball").effect("shake");
  
	  $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
  
	  $("#answer").fadeIn(4000);
  
	  var randomNumber = Math.random();
  
	  var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
  
	  var randomIndex = Math.floor(randomNumberForListOfAnswers);
  
	  var answer = this.listOfAnswers[randomIndex];
  
	  $("#answer").text(answer);
  
	  console.log(question);
	  console.log(answer);
	};
  
	var onClick = function() {
  
	  $("#answer").hide();
  
	  $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
  
  
	  setTimeout(function(){
		var question = prompt("ASK A YES/NO QUESTION!");
		magic8Ball.askQuestion(question);
	  }, 500);
  
  
	};
  
	$("#questionButton").click(onClick);
  
  });
*/
/*
let a= document.getElementById("US").value;
let b= document.getElementById("UK").value;
let content = document.querySelector(".h");
document.getElementById("click").onclick = function(){
	if(a == true){
		document.getElementById("h").innerHTML = "Hi Thanks for Choosing US";
	}
	else if(b == true){
		document.getElementById("h").innerHTML ="Hi Thanks for Choosing UK";
	}
	else{
		window.alert("You didn't choose anything");
	}
}  

content.style.visiblity = 'visible';
*/
/*
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(':insertx:',xItem);
  newStory = newStory.replaceAll(':inserty:',yItem);
  newStory = newStory.replaceAll(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Bob', name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
    newStory = newStory.replaceAll('94 fahrenheit', temperature);
    newStory = newStory.replaceAll('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
*/

//synchronous code
/*
console.log("Hi");
console.log("Hello");
console.log("welcome Ragul!..");

//Asynchronous code

console.log("Hello ");
setTimeout(("Hello"),1000);
console.log("Hi");
*/
//setInterval
/*
let count=0;
let x=prompt("Enter a Number:");
x=(Number)(x);
let t = setInterval(countup, 1000);

function countup(){

	for(let i=count;i<=x;i++){
		console.log(i);	
	}
	clearInterval(t);
}
*/
//another way
/*
let c =0;
let a =prompt("Enter the value:");
a=Number(a);
let t1 = setInterval(counter, 1000);
function counter(){
	c = c + 1;
	if(c <= a){
		window.alert(c);
	}
		
}
*/
//stopwatch
/* 
const showTime = document.querySelector("#showTime");
const start = document.querySelector("#start");
const pause = document.querySelector("#stop");
const reset = document.querySelector("#pause");

let startTime =0;
let elapsedTime =0;
let currentTime =0;
let paused = true;
let intervalId = 0;
let hrs =0;
let min=0;
let sec =0;

start.addEventListener("click", () => {
	if(paused){
		paused = false;
		startTime = Date.now() - elapsedTime;
		intervalId = setInterval(updateTime, 75);
	}
});
pause.addEventListener("click", ()=> {
	if(!paused){
		paused=true;
		elapsedTime = Date.now() - startTime;
		clearInterval(intervalId);
	}
});
reset.addEventListener("click", () => {
	paused = true;
	clearInterval(intervalId);
		 startTime =0;
		 elapsedTime =0;
		 currentTime =0;
		 hrs =0;
		 min=0;
		sec =0;
		showTime.textContent="00:00:00";
});
	
	


	
function updateTime(){
	elapsedTime = Date.now() - startTime;

	sec = Math.floor((elapsedTime / 1000) % 60);
	min = Math.floor((elapsedTime / (1000 * 60)) % 60);
	hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);
	
	sec = pad(sec);
	min = pad(min);
	hrs = pad(hrs);

	showTime.textContent = `${hrs}:${min}:${sec}`;
	
	function pad(unit){
		return (("0") + unit).length > 2 ? unit : "0" + unit;
	}
}

 */
/* 
const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtn = document.querySelector(".btn");
let player;
let computer;
let result;

choiceBtn.forEach(button => button.addEventListener("click", () => {
	player = button.textContent;
	computerTurn();
	playerText.textContent = `Player: ${player}`;
	computerText.textContent= `Computer: ${computer}`;
	resultText.textContent = checkWinner();
}));

function computerTurn(){
	const ran = Math.floor(Math.random() * 3) + 1;
	switch(ran){
		case 1:
			computer = "ROCK";
			break;
		case 2:
			computer = "PAPER";
			break;
		case 3:
			computer = "SCISSORS";
			break;

	}
}

function checkWinner(){
	if (player == computer){
		return "Draw!"
	}
	else if(computer == "ROCK"){
		return (player == "PAPER") ? "You Win!" : "You Lose...";
	}
	else if(computer == "PAPER"){
		return (player == "SCISSORS") ? "You Win!" : "You Lose...";
	}
	else if(computer == "SCISSORS"){
		return (player == "ROCK") ? "You Win!" : "You Lose...";
	}
}
 */
/* A */
/* 
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");


var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
 */
/* function sumOfEvenNumbers(numbers) {
	let sum = 0;
	for (let i = 0; i < numbers.length; i++) {
	  if (numbers[i] % 2 === 0) {
		sum += numbers[i];
	  }
	}
	return sum;
  }
  
  // example usage
  let input = prompt("Enter a list of comma-separated numbers:");
  let numbers = input.split(",").map(Number);
  let result = sumOfEvenNumbers(numbers);
  console.log(result);
 */  
  document.getElementById("input").innerHTML = "INCHES:";
  document.getElementById("button").onclick = function(){
	let number = document.getElementById("number").value;
	let c = Number(number);  

	document.getElementById("input").innerHTML = (c / 2.54).toFixed(2) + " inches";
  }
