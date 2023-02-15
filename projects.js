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