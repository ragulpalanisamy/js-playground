class cal{

        constructor(previous,current){
            this.previous = previous;
            this.current = current;

        }

        clear(){
            this.current='';
            this.previous='';
            this.operation=undefined;

        }

        delete(){


        }

        appendNumber(number){
            if(number === '.' && this.current.includes('.')) return
            
            this.current = this.current.toString() + number.toString(); 
        }

        operation(operation){


        }
        equal(){


        }

        display(){
            this.current.innerText = this.current;

        }



}

let number = document.querySelectorAll('[data-number]');
let add=document.getElementById("plus");
let sub=document.getElementById("sub");
let mul=document.getElementById("mul");
let div=document.getElementById("div");
let equ=document.getElementById("equ");
let del=document.getElementById("del");
let clear=document.getElementById("clearAll");
let previous = document.getElementById('pre');
let current = document.getElementById('cur');
const calulator = new cal(previous,current);
number.forEach(button =>{
    button.addEventListener('click',() =>{
        calulator.appendNumber(button.innerText);
        calulator.display();

    } );
})