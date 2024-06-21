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

/* 
//date:/* 
 console.log(new Date());
//It gives the current date and time. new Date() gives in is format: yyy-mm-ddhh:mm:ss
console.log(new Date().toDateString());
console.log(new Date().toLocaleString());
console.log(new Date().toLocaleTimeString());
console.log(new Date().toLocaleDateString());  */ 
 
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


 //loop:;

 //intialazation
 //condition
 //afterthought

/*  let i;
 //i=0;
 for(i = 0; i < 3; i = i+1){
    console.log(i);
    //i = i+1 
    };
 */


/*  1.   initilization only runs at first.
2. condition runs until it meets the requirments.
3. (afterthought) is also exceuted evertime if loobody is excecuted
4. for loop repets until a specified condition evaluates to false. */


//while loop
/* 
let i = 0;
while(i<2)
{
    console.log(i);
    i = i+1;
} */

/* . if the condition become false, statement with in the loop stops executing */

/* 
    // do while loop:
    let i = 0;
    do{
        console.log(i);
        i = i + 1;

    }while(i < 2);

    //statement is always executed once before the condition is checked. */


    //Array = []:
    // map => map always contains return
    //syntax:
    /*  list.map ((value , index)=> {
     return     }) */
//map is very important for frontend and backend always remember:

/* let list = ['a','b','c'];   //value and index:
let output = list.map( (value , index)=> {
   // return 6;
   // return value;
  // return index;
   //return `${value}${index}`;
console.log("anish");
return index;   //same for value and value + index:
});
console.log(output);  */


//use map method if both input and output arrays are same and both input and output length are same.
//[1,2,3,4] = [2,4,6,8]

/* let list = [1,2,3,4]
let output = list.map((value , index)=>{
    return value * 2;
});
console.log(output); */

/* 
//   let fun1 = (inputArr)  => {
//   let output =  inputArr.map((value,index)=>{
//     return value*2;
//   });
//   return output;
// };
// let fun = fun1([2,4,6,8])
// console.log(fun); */


/* //split => string to array => "" => []
//join => array to string => [] => ""
console.log("anish".split("i"));
console.log("anish".split(""));
console.log(["a","n","i","s","h"].join("*"));
console.log(["a","n","i","s","h"].join("")); */

 
//filter:  mostly used
//filter only returns true or false.

/* let list = ['a','b','c'];
let list1 = list.filter((value,index)=>{
   // return false;
   return true;
});
console.log(list1); */

/* let list = ['a','b','c','d','e']
let output = list.filter((value,index)=>{
    if(value === "e"){   // if (value === "f"){}else{}
        return true;

    }else{




        return false;
    }
});
console.log(output); */

//[1,2,3,4] = [2,4,6,8] for mapping
//[1,2,3,4] = [2,4]  => vaid filter
//[1,2,3,4] = [1,3,4,5]  => invalid filter

/* let input = [1,2,3,6];
let output = input.filter((value,index)=>{
    if(value %  2 === 0){
        return true;
    }else{
return false;
    }
});
console.log(output); */



//find : if the return value is true it prints the intial value of the list item.


/* 
let list =  [1,2,3,4];
let list1 = list.find((value,index)=> {
    return false;
});
console.log(list1); */
 

/* //true and false: boolen only prints true value..
let input = ["ram", 1, "", 0,undefined, null, 'madhav'];
let output = input.filter(Boolean); 
console.log(output);
 */

// QNS:["ram","hari","shayam","roshan"] =>
    //print the value of array which is greater than 4
/* //ans:
let data = ["ram","hari","shayam","roshan"];
let output = data.filter((value,index)=>{
    if(value.length > 4 ){
        return true;
    }else{
        return false;
    }
});
console.log(output); */

/* 
//for each: no return 
let list = [1,2,3];
let output = list.forEach((value,index)=> {
    console.log(value);
}) */


    /* //includes: return true and false only
    let list = ["ram","hari","shayam","roshan"]
    let output =  list.includes("ram");  //anish -> false
    console.log(output); */
/* 
    //push -> push value to last
    //pop -> remove last value
    //unshift -> push value to first
  //shift  -> remove first value
let list = [1,2,3,4];
//  list.push(5);
 //list.pop();
// list.unshift(8);
// list.shift();
console.log(list); */

/* 
//sort : mostly used in terms -> 
//let list =  ['d','r','k','z','a',"S"]   //sorting according to their percistency
let list = ["anish","madhav","roshan","zed","john","sudha","Anis"]
//only vaid for string but not for number. number has its another story.
let output = list.sort()
console.log(output); */
/* 
let name = ["madhav","ramey","arbin","Sushil"];
let output = name.sort();
console.log(output); */
/* 
//slice : works on index
let list = [1,2,3,4];  
let newlist = list.slice(2); // -1 for the last value of the data
console.log(newlist); */

/* //reduce:
 //list.reduce(function,intialValue)
 //list.reduce(()=>{},o);
 //find the sum of all elements of array?
let list = [1,2,3,4];
let newList = list.reduce((previous,current)=>{
    return previous + current;
},0); // we can use any value for intiall according to the conditions:
console.log(newList); */

/* 
//Find the sum of all even elements of an array?
let input = [1,2,3,5,8,10];
let output = input.filter((value,index)=>{
if(value %2 === 0){
    return true;
}else{
    return false;
}
});
let sum = output.reduce((previous,current)=>{  //((pre,curr)=>{},0)
    return previous + current;
}, 0);
console.log(sum); */


//OBJECT: syntax -> {},[{},{},{},{}];   key and pair also called key value of pair..
//Array is a collection of values wheres onject is a  collection of key value pairs.
//key value pairs are called propertiy.
/* 
let info = {
    name: "ram",
    age: 29,
    address: "kathmandu",
    isMarrired: false, 
};
//get value
console.log(info.name);  // bollen value = undefined
console.log(info.age);  
console.log(info);  
//change value 
info.name = "hari";
info.age = 26;
console.log(info)
//delete value
delete info.isMarrired;
console.log(info) */

/*
//  in object if the value is changed after declearig it it will print the last value.
//duplicate key does not exist , if exist override by the below code.
let data = {
    name:"ram",
    age: 45,
    name : "hari",
};
console.log(data.name); */


//real life implementation:
/* 
let data = {
    name : "ram",
    favFruits: ["apple","orange"],
    location: {
         country: "Nepal",
         province: "Bagmati",
         city: "Kathmandu",
    }, 
    age : function() {
        console.log("My name is ram. I am 24 years old");
    },
};
console.log(data.favFruits[1]);
console.log(data.location.province);
data.age(); */


/* //Alias:  alias means changing the variable name.
//once you change variable name you can access  by its  changed name.
let {name:fullName,
     age: year,
      isMarried,
} =  {
    name: "ramey",
    age: 35,
    isMarried: false,
};
console.log(fullName,year);
 */

/* 
//this keyword : only works inside the object.
let info = {
    name :  "Madhav",
    surName : "Banjade",
    fullName: function (){
        console.log(this.name);
        console.log(this.surName);
    },
};
//console.log(info.name);
//console.log(this.name); -> error
info.fullName(); */


/* 
//array Destuctor:
let planet =  ["moon","sun", "venus"];
//let planet1 = planet[0];
//planet2 = planet[1];
// let [a,b,c] = planet;    
let [a,b,c, d =" mercury"] = planet;    //defult value  
console.log(a,b,c,d); */

/* 
//SPREAD OPERTATOR =>   ...  (mostly used)
let planet = ["sun","moon","pluto"];
let [planet1, ...rest] =  planet; // you can write anything in place of rest.
console.log(planet1);
console.log(rest);   // rest change the remening data into the array. */

/* 
let name = ['anish','ram','hari','shyam'];
let data = ['school','kathmandu','Nepal'];
let totalData =  [...name ,"This is my data", ...data];
console.log(totalData);   // ...spread operater is only return inside the array. */


/* let list = [
    { name : "mobile", price: 10000},
    {name: "Battery", price: 8000},
    {name:  "earphone", price: 5000},
    {name:  "charger", price: 2000},  
];
let newlist = list.sort((a,b)=>{
    return a.price - b.price;
});
console.log(newlist) */

/* //Number sort :
let list = [3,1,4,2];
let output =  list.sort((a,b)=>{
    //return a-b;   //accending
    return b - a;   //decending
})
console.log(output); */
/* 
//sort array according to array.
let list = ["ram","anish", "javascript",'az',"john","hari"];
let output =  list.sort((a,b)=>{
return a.length - b.length;
})
console.log(output);  */
/* 
//convert  object into Array:
let info =  {
    name : 'ram',  // total is property
    age: 30,
    isMarried: false,
};
let keysArray = Object.keys(info);
console.log(keysArray);
let valueArray = Object.values(info);
console.log(valueArray);
let propertyArray = Object.entries(info);   
console.log(propertyArray);    //array of array */



// convert array into object: we can only change array of array
/* 
let  info = [
    ["name", anish],
    ['age', 26],
    ["is married", false],
];
let output =  Object.fromEntries(info);
console.log(output); */

//math
// let data =  Math.random();
// console.log(data);

// let data =  Math.random()*2
// console.log(data);

/* let data =   Math.ceil(1.22);  // .ceil increase the value
console.log(data);
let data1 = Math.floor(1.99);  //.floor decrease the value  
console.log(data1); */

//Scope 
//{} = block 
// {
//     let a =   1;
//     console.log(a);
// }
// console.log(a);
//A variable will be known with in its block for the line where it is defined.

/* 
//{{}} ==> child block and parent block
{   //parent block
let a =  1;
{   // child block
    console.log(a);

}
console.log(a);
}
// when a variable is called, first it is searched in its own block, if the variable is not find
//in the block then it  will search for its parent block. */

/* 
{
    let a = 1;
    {
      a = 10;
      console.log(a);
    }
    console.log(a)
}

//A variable can not be redfined in the  same block. but we can redefined same variable 
//  in  diffrent  block. */

/* 
// == or ===
console.log('1' == 1); // true , it only check   value
console.log('1 ' === 1); //fa;se , it sees value and type */


/* 
//NaN 
console.log(1+1);
console.log('a' * 'b' ); 
//undefined
let a;
console.log(a);
//undefined means variable is defined but not initialized  */

/* 
//Rest or spread    ...
let {name, ...rest}= {
    name: ' ram', age : 20, isMarried : true,};
console.log(name);
console.log(rest) */

/* 
let sum =  (a,...b)=> {
console.log(a);
console.log(b);
}
sum (1,2,2,3,3,4,5,56,); */

/* 
//spread
let arr = [  1,2,3,4,5];
let arr1 = ["ram","john", " tim"];
let output = [2,4, ...arr1, 6,8, ...arr, "javascript"];
console.log(output); */

let info =  {
    name: 'ram', age: 24, isMarried: true};
    let info1 =  {...info};
console.log(info1);
let info2 =  {...info, location: "kathmandu"};
console.log(info2)









