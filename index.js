function add(a, b) {
    return a + b;
}

// array function
let add1 = (a, b) => {
    return a + b;
}

let add2 = function (a, b) {
    return a + b;
}

// console.log(add(1,2));
// console.log(add1(3,4));
// console.log(add2(5,6));

// console.log(this);

const obj={
    fn : function(){
        console.log(this)
    },

     fn1 : ()=>{
        console.log(this)
    }
}

// obj.fn();
// obj.fn1();

const person1={
    name:"Avinash"
}

const person2={
    name:"Monika"
}

function x(){
    console.log(this)
}

x.call(person1)