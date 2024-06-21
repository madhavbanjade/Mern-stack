 
// get the total value of array  of object price and sort them with their lower 
//value upper value.also sort the name?
/* let list = [
    { name : "mobile", price: 10000},
    {name: "Battery", price: 8000},
    {name:  "earphone", price: 5000},
    {name:  "charger", price: 2000},  
];
let  newList = list.map((value,index)=>{
 return value.price;
});
console.log(newList);
let sum = newList.reduce((previous,current)=>{
return previous + current;
},0);
console.log(sum); */
/* 
let list = [
    { name : "mobile", price: 10000},
    {name: "Battery", price: 8000},
    {name:  "earphone", price: 5000},
    {name:  "charger", price: 2000},  
];
let newlist = list.sort((a,b)=>{
    return a.price - b.price;
});
console.log(newlist); */
/* 
let list = [
    { name : "mobile", price: 10000},
    {name: "Battery", price: 8000},
    {name:  "earphone", price: 5000},
    {name:  "charger", price: 2000},  
];
let newList  = list.map((value,index)=>{
    return value.name;
});
console.log(newList);
let output = newList.sort();
console.log(output); */




/* // make an arrow function. if age is 25, console your ticket is free, if age is 26 ticket is 100
//if age is other than this,console you are not allowed.
let age =  35;
let  fun  = () => {
if(age === 25){
    console.log("your ticket is free.");
}else if (age === 26){
    console.log("your ticket is 100.");
}else{
    console.log("you are not allowed");
}
};
let data = fun(); */


/* 
make an arrow function named sum (num1,num2) also pass 2 input 
and it must be return the sum of num1 and num2 is num3. here num1,num2 and num3 
is number , do this using string literals. 
let  sum   = (num1 , num2)  => {
     let num3 = num1 + num2
    console.log(`the sum of ${num1} and  ${num2} is ${num3} `);
}
sum(3,4)id
*/

/* 
//make an arrow function and pass array fruits, if array contain apple function must return 
//"the fruits contain apple" else return " the fruits does not conatin apple" using include..?
let fruitsArray  = (fruits) => {
    if(fruits.includes("apple")){
        console.log("The fruits contain apple.")
    }else{
        console.log("The fruits does not contain  apple.")
    }
} 
fruitsArray(["apple","orange"]); */

//


// let product =  [
// {name: "laptop", price: 100000},
// {name: "mobile", price: 50000},
// {name: "tv", price: 70000}
// ]

/* 
// ["laptop", "mobile", "tv"]
let output = product.map((value,index)=>{
    return value.name;
})
console.log(output); */
/* 
//[100000,50000,70000]
let output1 =  product.map((value,index)=>{
    return value.price;
})
console.log(output1); */



/*  
//[{name:"laptop",price: 100000}, {name: 'tv', price: 70000}]  //filter
let productArray =  product.filter((value,index)=>{
    return value.price > 60000;
})
console.log(productArray);  */




/* 
//[{laptop: 100000}, {mobike: 5000}, {tv: 70000}]
let output3 =  product.map((value,index)=>{
    return {[value.name]: value.price}
});
console.log(output3); */

/* 
//["laptop","tv"]
let productArray =  product.filter((value,index)=>{
    return value.price > 60000;
})
console.log(productArray);
let newList =  productArray.map((value,index)=>{
    return value.name;
})
console.log(newList); */


const products = [
    {
      id: 1,
      title: "MacBook Pro",
      category: "Laptops",
      price: 100000.0,
      description: "A high-performance laptop.",
      manufactureDate: "2023-05-15T08:30:00",
      isAvailable: true,
    },
    {
      id: 2,
      title: "Nike",
      category: "Running Shoes",
      price: 5000,
      description: "Running shoes designed for speed and comfort.",
      manufactureDate: "2023-02-20T14:45:00",
      isAvailable: true,
    },
    {
      id: 3,
      title: "Python",
      category: "Books",
      price: 500,
      description: "A language for AI",
      manufactureDate: "1925-04-10T10:10:00",
      isAvailable: false,
    },
    {
      id: 4,
      title: "Javascript",
      category: "Books",
      price: 700,
      description: "A language for Browser",
      manufactureDate: "1995-12-04T12:00:00",
      isAvailable: false,
    },
    {
      id: 5,
      title: "Dell XPS",
      category: "Laptops",
      price: 120000.0,
      description: "An ultra-slim laptop with powerful performance.",
      manufactureDate: "2023-04-25T09:15:00",
      isAvailable: true,
    },
  ];
  let productsArray =  products.filter((value,index)=>{
    return value.price > 2000;
});
console.log(productsArray);
let output = productsArray.map((value, index)=>{
    return `${value.title} cost NRs. ${value.price} and its category is ${value.category}`;
})
console.log(output);

 

