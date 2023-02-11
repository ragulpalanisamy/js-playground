/*             
document.getElementById("p1").innerHTML="hello";

//getting user input:

let uname=window.prompt("Enter the username");
window.alert("hello ! " + uname);

//another way

let usname;
document.getElementById("submit").onclick= function(){
    uname=document.getElementById("name").value;
    window.alert("Welcome " + usname);
}


//type conversion


let x=10;
console.log(x, typeof x);
x=(String)(x);
console.log(x);
console.log(x, typeof x);

//math problem

let a=window.prompt("Enter the Value A: ");
a=Number(a);
let b=window.prompt("Enter the Value B: ");
b=Number(b);
let c=Math.sqrt((a*a)+(b*b));
console.log(c);

//basic sides program;

let d;
let e;
let f;

document.getElementById("submit").onclick= function(){
    d=document.getElementById("a").value;
    d=Number(a);
    
    e=document.getElementById("b").value;
    e=Number(b);
    f=Math.sqrt((a*a)+(b*b));

    document.getElementById("c").innerHTML=`The side c is : ${f}`;
}


//increase decrease reset

let count=0;

document.getElementById("dec").onclick= function(){
    count-=1;
    document.getElementById("h").innerHTML= count;
}

document.getElementById("re").onclick= function(){
    count=0;
    document.getElementById("h").innerHTML= count;
}

document.getElementById("inc").onclick= function(){
    count+=1;
    document.getElementById("h").innerHTML= count;
}



let r;
let s;
let q;

document.getElementById("submit1").onclick = function() {
    r=Math.floor(Math.random() * 6) + 1;
    document.getElementById("r").innerHTML= r;

    s=Math.floor(Math.random() *6) + 1;
    document.getElementById("s").innerHTML= s;

    q=Math.floor(Math.random() *6) + 1;
    document.getElementById("q").innerHTML= q;

}
*/
/*
*/
/*
document.getElementById("sub4").onclick= function(){
    if(documnet.getElementById("pay").checked){
        window.alert("Thank You for Choosing Paytm!.....");
    }
    else if(documnet.getElementById("pho").checked){
        window.alert("Thank You for Choosing Phonepay!.....");
    }
    else if(Gpay.checked){
        window.alert("Thank You for Choosing Gpay!.....");
    }
    else{
        window.alert("choose the payment method.....");
    }
}*/
/*
document.getElementById("sub").onclick=function(){
   
    //const pay=documnet.getElementById("pay");
    //const pho=documnet.getElementById("pho");
    //const Gpay=documnet.getElementById("Gpay");

    if(document.getElementById("check").checked){
        window.alert("you successfully subscribed!.....");
    }
    else{
        window.alert("yet to subscribe.....");
    }

    if(documnet.getElementById("pay").checked){
        window.alert("Thank You for Choosing Paytm!.....");
    }
    else if(documnet.getElementById("pho").checked){
        window.alert("Thank You for Choosing Phonepay!.....");
    }
    else if(documnet.getElementById("Gpay").checked){
        window.alert("Thank You for Choosing Gpay!.....");
    }
    else{
        window.alert("choose the payment method.....");
    }
}
*/
//if-else
/*
document.getElementById("button").onclick= function() {
    const pay=document.getElementById("pay");
    const pho=document.getElementById("pho");
    const Gpay=document.getElementById("Gpay");
    
    
    if(pay.checked){
        window.alert("thank you choosing Paytm!...");
    }
    else if(pho.checked){
        window.alert("thank you choosing PhonePay!...");
    }
    else if(Gpay.checked){
        window.alert("thank you choosing GPay!...");
    }
    else{
        window.alert("choose any of the payment option...");
    }
}

//nested for loop.

let a=window.prompt("Enter the symble");
let n=window.prompt("Enter the row");
let m=window.prompt("Enter the column");
for(let b=0;b<n;b++){
    for(let c=0;c<m;c++){
        document.getElementById("h").innerHTML += a;
    }
    document.getElementById("h").innerHTML += "<br>";
}
*/

//function concepts
/*
document.getElementById("h").onclick=function() {

let usname=window.prompt("enter the name..");

ragul(usname);
function ragul(usname){
    console.log(`Welcome ${usname}`);
}



let width=window.prompt("enter the width..");
let length=window.prompt("enter the length..");
let area;

area = Area(width,length);
window.alert("the area is : ", area);
function Area(width,length){
    let lem=width*length;
    return lem;
}

}
*/

// number gussing game.
/*
const num = Math.floor(Math.random() * 10 + 1);
let count=0;
document.getElementById("guss").onclick= function() {
   let a = document.getElementById("g").value;
   count +=1;
    if(a == num){
        window.alert(` the guss number is ${num}, you took ${count}`)
    }
    else if(a < num){
        window.alert(`To Small`)
    }
    else{
        window.alert(`To Big`);
    }

}
*/

//celsius and faherinheit
/* 
document.getElementById("temp").onclick = function() {

    let temp;


    if(document.getElementById("cel").checked){
        temp = document.getElementById("a").value;
        temp = Number(temp);
        temp = cels(temp);
        document.getElementById("don").innerHTML = "<br>"+ temp + "*c";  
    }

    else if(document.getElementById("fah").checked){
        temp = document.getElementById("a").value;
        temp = Number(temp);
        temp = fahe(temp);
        document.getElementById("don").innerHTML = "<br>"+temp + "*F";  
    }

    else{
        window.alert("Enter the Temperature: ");
    }
}


    function cels(temp){
        return ((temp -32) * (5/9));
    }

    function fahe(temp){
        return temp * 9 / 5 + 32;
    }
*/

//for each
/*
let s=["apple","mango","orange"];

s.forEach(dy);
s.forEach(by);

function dy(ele,ind,arr){
     arr[ind] = ele[0].toUpperCase() + ele.substring(1);
    document.getElementById("my").innerHTML= arr[0];    
}

//console.log(s[0]);

function by(ele){
 //   document.getElementById("my").innerHTML= ele;
    console.log(ele);
}

*/

//array map.
/*
let a=[1,2,3,4,5];
let sq = a.map(cube);
sq.forEach(p);

function sqr(a){
    return Math.pow(a,2);
}

function cube(b){
    return Math.pow(b,3);
}

function p(b){
    console.log(b);
}

*/

//sorting
/*
let a=[100,80,50,30,40,35];

let s=a.sort(ascsor);

//let r=a.sort(decsor);
a.forEach(print);

function ascsor(a,b){
    return a-b;
}

function decsor(a,b){
   return b-a;
}


function print(a){
console.log(a);
}
*/

//function without function name or function expression.
/*
const greet = function(){
    window.alert("Hi!..");
}
greet();

*/
/*

let count=0;

function increase(){
    count+=1;
    document.getElementById("label").innerHTML = count;
}

function decrease(){
    count-=1;
    document.getElementById("label").innerHTML = count;
}

*/

//arrow function
/*
let a = (x,y) => x / y * 100;

console.log(`${a(45,115)}%`)

*/

//sorting using arrow method.
/*
let a = [12,2,3,4,5];


a.sort((a,b) => a-b);

a.forEach((a) => console.log(a));
*/

//shuffle the cards in an array .
/*
let cards=["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

shuffle(cards);

cards.forEach(card => console.log(card));

function shuffle(a){
    let currentarr = a.length;
    
    while(currentarr !=0){
        let random = Math.floor(Math.random() * a.length);
        currentarr -= 1;

        let temp = a[currentarr];
        a[currentarr] = a[random];
        a[random] = temp;

    }
    return a;
}

*/

/*
let uname=window.prompt("enter ur name");
let inbox=0;

login();

function login(){

    username();
    inb();

    function username(){
        console.log(`welcome!. ${uname}` );
    }

    function inb(){
        console.log(`you recieved  ${inbox} messeges`);
    }
}

*/



//console.log(da(date));
/*
let lab = document.getElementById("lab"); 
setInterval(da, 1000);
da();

function da(){
    let date = new Date();

    lab.innerHTML = time(date);

    function time(){
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
   
    let ap = hour >= 12 ? "PM" : "AM"; 

    hour = (hour % 12) || 12;

    hour = zer(hour);
    minute = zer(minute);
    second = zer(second);

    return `${hour}h : ${minute}m : ${second}s ${ap}`;
    }

    function zer(time){
        time=time.toString();
        return time.length > 12? "0" + time : time; 
    } 
}

*/

//class 
/*
 let score=0;
class car{
     

    pause() {
        console.log("you paused the game");
    }
    exit(){
        console.log(`you exit the game with the score ${score}`);
    }
}

let car1 = new car();

score+=3;
car1.pause();
car1.exit();

*/

//class object
/*
let car={
    model :"Ford",
    year  :"2022",
    color :"red",

    drive:function(){
        console.log(`you can drive the ${car.model}`);
    }
    ,
    stop: (()=>{
        console.log(`you brake the ${car.model}`);
    })

//brake();
};

//let car1= new car();

console.log(car.model);
console.log(car.year);
car.drive();
car.stop();

*/

//constructor
/*
class stud{

    constructor(name,age,gpa){
        this.name = name,
        this.age = age,
        this.gpa = gpa;
    }

    study(){

        console.log(`the ${this.name} is studing`);
    }
};

let stud1 = new stud("ragul",21,9.2);

console.log(stud1.name);
console.log(stud1.age);
console.log(stud1.gpa);
console.log(stud1.study());
*/

//inheritence
/*
class Animal{
     
    alive = true;

    sleep(){
        console(`The ${this.name} can sleep`);
    }
    eat(){
        console.log(`The ${this.name} can eat`);
    }
}
    class rabbit extends Animal{

        name="Rabbit";

        run(){
            console.log(`The ${this.name} can run`);
        }
    }
        class fish extends Animal{

            name="Fish";
    
            run(){
                console.log(`The ${this.name} can swim`);
            }
    };

    const rabbits = new rabbit();
    const fisha = new fish(); 
console.log(rabbits.alive);
console.log(rabbits.run());

*/

//event listner.
/*
const button = document.getElementById("button");
const lab = document.getElementById("lab");
button.addEventListener("click", fun);
lab.addEventListener("mouseover", move);
lab.addEventListener("mouseout", out);
//lab.addEventListener("", out);
function fun(){
    alert('you did something!...');
}

function move(){
    lab.style.backgroundColor= "Red";
}
function out(){
    lab.style.backgroundColor= "lightgreen";
}
*/
/*
const outer = document.getElementById("outer");
const inner = document.getElementById("inner");

outer.addEventListener("click", out);
inner.addEventListener("click", out);

outer.addEventListener("mouseover", move);
inner.addEventListener("mouseout", out);
//lab.addEventListener("", out);
function fun(){
    alert('you did something!...');
}

function move(){
    lab.style.backgroundColor= "Red";
}
function out(){
    lab.style.backgroundColor= "lightgreen";
}


function out(){
    alert(`You selected ${this.id}`);
    this.style.backgroundColor="blue";

}
*/

//amstrong number.
/*
let a = window.prompt("Enter a Number:");
a=Number(a);
let temp=a;
isArmstrongNumber(a);
function isArmstrongNumber(num) {
    let numOfDigits = num.toString().length;
    let sum = 0;
    while (num > 0) {
      let digit = num % 10;
      sum += Math.pow(digit, numOfDigits);
      num = Math.floor(num / 10);
    }
  
  if(sum == temp){
    alert(`${temp} is a amstrong Number`);
}
else{
    alert(`${temp} is not an Amstrong Number`);
}

}
*/

//Animation slider
/*
let button = document.getElementById("button");
let anime = document.getElementById("inner");

button.addEventListener("click", begain);

function begain(){
    let time = null;
    let x=0;
    let y=0;
    time =setInterval(frame, 3);
    function frame(){
        if(y>200){
            clearInterval(time);
        }
        else{
            x+=1;
            y+=1;
            anime.style.left = x+"px";
            anime.style.top = y+"px";
        }
    }
}

*/

//Animation Scale like expand to x-axis and y-axis
/*
let button = document.getElementById("button");
let anime = document.getElementById("inner");

button.addEventListener("click", begain);

function begain(){
    let time = null;
    let scaleX = 1;
    let scaleY = 1;
    
    time = setInterval(frame,5);

    function frame(){
        if(scaleX >= 2 || scaleY >=2){
            clearInterval(time);
        }
        else{
            scaleX +=0.01;
            scaleY +=0.01;
            anime.style.transform = "scaleX("+scaleX+")";
            anime.style.transform = "scaleY("+scaleY+")";

        }
    }
}
*/

//Animation Rotate the box into 360degree
/*
let button = document.getElementById("button");
let anime = document.getElementById("inner");

button.addEventListener("click", begain);

function begain(){
    let time = null;
    let x =0;
    let y =0;

    time = setInterval(frame,5);

    function frame(){
        if(x >= 360 || y>=360){
            clearInterval(time);
        }
        else{
            x +=1;
            y +=1;
            anime.style.transform = "rotateZ("+x+"deg)";
           // anime.style.transform = "rotateY("+y+"deg)";
            //anime.style.transform = "rotateZ("+degree+"deg)";
            
        }
    }
}

*/

//canvas API
/*sample horizontal sketch

let canvas = document.getElementById("inner");
let context= canvas.getContext("2d");

context.beginPath();
context.moveTo(0 , 0);
context.lineTo(500,500);
context.stroke();

*/

// Y using Canvas.
/*
let canvas = document.getElementById("inner");
let context= canvas.getContext("2d");

context.beginPath();
context.moveTo(0 , 0);
context.lineTo(250,250);
context.lineTo(250, 500);
context.moveTo(500 , 0);
context.lineTo(250,250)

context.stroke();
*/

//square
/*
let canvas = document.getElementById("inner");
let context= canvas.getContext("2d");

context.beginPath();
context.moveTo(0 , 0);
context.lineTo(250,0);
context.lineTo(250,250);
context.moveTo(250 , 250);
context.lineTo(0,250);
context.moveTo(0,0);
context.lineTo(0,250);


context.strokeStyle ="blue";
context.lineWidth = 10;
context.stroke();
*/

//Trinangle
/*
let canvas = document.getElementById("inner");
let context= canvas.getContext("2d");

context.beginPath();
context.moveTo(250 ,0);
context.lineTo( 0, 250);
context.lineTo(500,250);
context.lineTo(250,0);

context.strokeStyle ="blue";
context.lineWidth = 10;
context.stroke();
*/

//Rectangle
/*
let canvas = document.getElementById("inner");
let context= canvas.getContext("2d");

context.beginPath();
context.moveTo(0 ,100);
context.lineTo(0,400);
context.lineTo(500,400);
context.lineTo(500,100);
context.lineTo(-100000,100);

context.strokeStyle ="blue";
context.lineWidth = 10;
context.stroke();

*/

//fill with cubes.
/*
let canvas = document.getElementById("inner");
let context= canvas.getContext("2d");

context.fillStyle= "pink";
context.fillRect(0,0,250,250);
context.fillStyle = "pink";
context.fillRect(0,0,250,250);

context.fillStyle= "black";
context.fillRect(0,250,250,250);
context.fillStyle = "blue";
context.fillRect(0,250,250,250);

context.fillStyle= "yellow";
context.fillRect(250,250,250,250);
context.fillStyle = "yellow";
context.fillRect(250,250,250,250);

context.fillStyle= "green";
context.fillRect(250,0,250,250);
context.fillStyle = "black";
context.fillRect(250,0,250,250);

*/

//circle
/*
let canvas = document.getElementById("inner");
let context= canvas.getContext("2d");

context.beginPath();
context.arc(250,250,200,0,2 * Math.PI);
context.fillStyle = "pink";
context.strokeStyle ="blue";
context.lineWidth = 10;
context.stroke();
context.fill();
*/

//alert text
/*
document.getElementById("inner").onclick = function(){
    let name = window.prompt("Enter the name");
    window.alert("Welcome "+ name);
}

//arr fun

let a=['ragul','IT','2023'];
//print all values
for(let b of a){
    console.log(b);
}

//add another vaue at last
a.push("snsct");
console.log(a);
//remove last element in an array
a.pop();
console.log(a);

//add element in front of the arr
a.unshift("snsct");
console.log(a);

//remove first element in an array

a.shift();
console.log(a);
console.log(a.length);

// sort in ascending order
a.sort();
console.log(a);
//sort from decending order using method chaining .
a.sort().reverse();
console.log(a);
*/

//2D array
/*
let row = prompt("enter the rows: ");
let col = prompt("enter the column: ");
let arr=[];

for(let i=0;i<row;i++){
   arr[i]=[];
   for(let j=0;j<col;j++){
    arr[i][j]= prompt(`Enter the value arr[${i}][${j}]`);
   }
}

//Enter array

for(let i=0;i<row;i++){
    for(let j=0;j<col;j++){ 
        document.write(arr[i][j] + " ");
    }
    document.write("<br>");
}
*/
/*
//without using windows prompt to alert the string from the user.
document.getElementById("id").onclick = function(){
    let str = document.getElementById("text").value;
     window.alert(str);
     
}
//without using windows prompt to display the string from the user.

document.getElementById("id").onclick = function(){
    let str = document.getElementById("text").value;
    document.getElementById("inner").innerHTML = str;     
}
*/

//show or hide html element
/*
const a = document.querySelector("#id");
const b = document.querySelector("img");

a.addEventListener("click",() =>{
    if(b.style.display == 'none'){
        b.style.display="block";
    }
    else{
        b.style.display="none";
    }
});
*/


const head = document.getElementById("h1");
window.addEventListener("keydown", move);
let x=0;
let y=0;
function move(event){

    switch(event.key){
        case "ArrowDown":
            y+=5;
            head.style.top = y+"px";
            break;
        case "ArrowUp":
            y-=5;
            head.style.top = y+"px";
            break;
        case "ArrowRight":
            x+=5;
            head.style.left = x+"px";
            break;
        case "ArrowLeft":
            x-=5;
            head.style.left = x+"px";
            break;
        default:
            window.alert("This is not a write key");   
                
    }
};


//data

let date = document.getElementById("h1");
date = new Date();
document.getElementById("h1").innerHTML = date;



















