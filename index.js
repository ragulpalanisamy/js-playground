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



























