//generate quotes
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



























