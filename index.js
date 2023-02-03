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












