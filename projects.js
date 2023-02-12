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

let count =0;

document.getElementById('lower').onclick = function(){
    count -=1;
    document.getElementById('h').innerHTML = count;
}


document.getElementById('add').onclick = function(){
    count +=1;
    document.getElementById('h').innerHTML = count;
}