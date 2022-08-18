// initialize variables 
let inputA, inputB; 
let fibnach, fibNew, fibNew2;
let varAB;
let varTest;

// assigns value to the arrays 
fibnach = [];
fibNew = [];
fibNew2 = [];

//assign value to inputA and inputB
inputA = document.getElementById('var1').value;
console.log(inputA);
fibnach.push(inputA);
console.log(fibnach)

inputB = document.getElementById('var2').value;
console.log(inputB);
fibnach.push(inputB);
console.log(fibnach)

//Concantinate inputA and B
varAB = "" + inputA + inputB;
console.log(varAB);
//push varAB to end of array fibnach
fibnach.push(varAB);
console.log(fibnach);

//Concantinate array with join
// assign to varTest
varTest = fibnach.join('');
console.log(varTest);
//push varTest to end of array fibnach increasing it's size
fibnach.push(varTest);
console.log(fibnach);


console.log(fibnach.join(' '));
// push inputA and inputB symultaniously but in order to fibNew
//assiging fibNew a new value
fibNew.push(inputA, inputB);
console.log(fibNew);

// code above works 
// create a function
function fibFunction (){
  
};
//push last  and second to last index of array to array2
fibNew2.push(fibNew[fibNew.length - 1], fibNew[fibNew.length - 2] );
console.log(fibNew2);
// no need for the below, can do both at the same time 
//fibNew2.push(fibNew[fibNew.length - 2]);
// initialise newfibnum
let newfibnum;

// join last index of arr with second to last index of arr and asign to var
newfibnum = fibNew2.join('');
console.log(newfibnum);
//push newfibnum to array increasing length of array to 3  
fibNew.push(newfibnum);
console.log(fibNew);
console.log(fibNew2);
//empty array fibNew2

document.getElementById("demo2").addEventListener("click", fibFunction1);
document.getElementById("demo").addEventListener("click", fibFunction2);

function fibFunction1(){
 // add input a and input b inside for live update
 inputA = document.getElementById('var1').value;
 inputB = document.getElementById('var2').value;
 //reasign fibNew to []

 fibNew = [];
 fibNew.push(inputA, inputB);
 let element_Par = document.getElementById("fibStart");
 element_Par.innerText = fibNew.join(' ');
};


function fibFunction2 (){
 

  fibNew2 = [];
  
  fibNew2.push(fibNew[fibNew.length - 1], fibNew[fibNew.length - 2] );
  console.log(fibNew2);
  
  newfibnum = fibNew2.join('');
  console.log(newfibnum);
  fibNew.push(newfibnum);
  console.log(fibNew);
  let elementList = document.getElementById("showFib");
let new_li = document.createElement('li');
new_li.innerText = fibNew.join(' ');
elementList.appendChild(new_li);
};

//fibFunction2();
//fibFunction2();
//fibFunction2();
//push last index of arr to arr2

//onclickhow 
// fib function
//let new-var
//for each item in array fibNew 
//conantinate array fibNew 
//let new-var = conantinate array fibnew
//fibnew.push(new-var)
//console log value of fibNew
