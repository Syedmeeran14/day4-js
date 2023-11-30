//for loop iteration

let arr1 = [10,20,30,40,50];
let new1 = [];
for(let i = 0; i<arr1.length;i++){
  new1.push(arr1[i]);
}
console.log(new1);


//for in-loop iteration

let arr2 = [10,20,30,40,50];
let new2 = [];

for(var index in arr2){
  new2.push(index);
}
console.log(new2);


// for of -loop iteration

let arr3 = [10,20,30,40,50];
let new3 = [];

for(let value of arr3){
   new3.push(value); 
}
console.log(new3);


//for each-loop iteration

let str = [10,20,30,40];
let new4 = [];

str.forEach(element => {
  new4.push(element)
});
console.log(new4);



