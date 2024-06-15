// data types 
// number = 1,2,3
// sting = 
// boolen = 
//operator => +,- , *,/



/*
console.log("Hello world");
console.log("N-9 solution");
console.log("Office");
console.log("Chabahil");
console.log(1+1);*/


// console.log("a" + "b");
// console.log("a" + "1");

/*
let name = 'madhav';
let address = ' kathmandu';
let age = 20;
console.log(age, name, address) ;
age = 30;
console.log(age);*/

// console.log("a" - "a");
// let num1 = 1;
// let num2 =  2;
// console.log(`The  result of num1 and num2   = ${num1 + num2}`);

// console.log(javascripy);

// console.log(java)
/* 
let a = "mad'hav";
console.log(a);


let b = 1+2+3+"4";
console.log(b); */



/*  we can not declare variable two times it throws => it throw error
let add = 'ktm';
let add = 'bhakt';
 */

/* console.log(1 + 2 "3" + 4 + 5); we can not add  string between the Number; */

//string literals =>

   /*  let num1 = 1;
let num2 = 2;
let sum =  `the sum of ${num1 } and ${num2}  = ${num1 + num2}`;
console.log(sum); */


/* 
let name = "Madhav";
let surName = "Banjade";
let fullName = `My fullName is ${name} ${surName}`;
console.log(fullName);
 */

//truthy and falsy value / boolen:=>
    //single sting is falsy value other are truthy
//0 is a falsy value and 1 is truthy

/* let a = !!("false");
let b = !!(" ");
let c = !!("");
let d =  !!(0);
let e  =!!(1);
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e); */
//===, <, >, <=, >=




// if-else
/* 
 let a = false;
 if(!a) {
console.log("i am if");
 }else{ 
console.log("i am else");
 }  */

//  in if else condition is always block in always wrapped by paranthesis
/* () => parantesis
{} => curly braces or block
[] =>  array */

/* let name = 'madhav';
if (name === 'hari'){
    console.log("i am a");
}else if(name  ===  'ram'){
    console.log(" i am b");
}else if(name === ' krishna'){
    console.log("i am c");
}else{
    console.log("i am madhav");
} */


/*     let number = 10;
    if (number > 11){
        console.log("i am a")
    }else if(number >= 10){
        console.log("i am b")
    }else{
        console.log("i am c")
    } */


//if the value is true then not(!) makes it false and vice-verse
// double not (!!) makes or converts the value into boolen

/*  let name = 'anish';
if(!name ){
    console.log('a');
}else{
    console.log('b');
}  */



    //function, function define, call function, function pass by value,return, arrow function

/*     let fun1 = function(){
        console.log("i am function")
    };
// A function will not execute unless it is not called. we have to call function  to execute the functon 
 // code block
console.log("a")
fun1();
console.log('b') */


//value pass=>
   /*  let fun1 = function(a,b,c){   //parameter
        console.log("i am function");
        console.log(a);
        console.log(b);
        console.log(c);
        console.log(a+b);
        console.log(a+b+c);
        console.log(a*b*c)
    };
//     fun1(1,2,3);   arrgumrnts
/*  
let mul =  function (a,b,c){
let d = a*b*c;
console.log(d)
};
mul(3,4,5); 
*/
//defult value
/* let fun1 =  function(a,b,c=9){
console.log(a)
console.log(b)
console.log(c)
};
fun1(1,2,3); */

// it is not nessesery to have same num of arrguments and parameters.



//funtion with return
/* let fun1 =  function(){
return 5; //last line of function
console.log(a) //unreachable code.
}
let data = fun1();
console.log(data); */

//Function without return : call normally fun1()
//Function  with return : let data = fun1(), call by storing it in a variable.


//let fun1 = function(){}; traditional method
//let fun1 =()=> {} morden arrow function
// ()=>{}  need to be remember every time for arrow funtion.

/* let age =  18;
let fun1 =  ()=>{
    if(age > 17){ 
        console.log("He  can  go to club")
    }else{
        console.log("He can not go to club")
    }
};
let data = fun1(); */

/* let add =  (num1,  num2) => {
    // let num3 = num1  + num2;
    // return num3;
    return num1 + num2; //this is better approche.
};
// it is necessry to store the variable after you pass return to function.
//java script function has only one return  value.
let sum = add(8,9);
console.log(sum); */
/* 
let name =  "anish"
console.log(name)
name = "rijan"
console.log(name) */

//javaScript is a dynamic langauge because a variable can be stored diff value at a diff time.

/* const name =  "ram";
console.log(name);

let name1 =  "hari";
console.log(name, name1); */


//import and export:


//date:/* 
 console.log(new Date());
//It gives the current date and time. new Date() gives in is format: yyy-mm-ddhh:mm:ss
console.log(new Date().toDateString());
console.log(new Date().toLocaleString());
console.log(new Date().toLocaleTimeString());
console.log(new Date().toLocaleDateString());  

//length:
/* let name = 'anish adk';
console.log(name.length); */

//toLowerCase 
/* let name = "AnISH";
console.log(name.toLowerCase()); */

//replaceAll
/* let name = 'tree';
console.log(name.replaceAll("t","m")); */

//UpperCase:
// let name = "mango";
// console.log(name. toUpperCase());














