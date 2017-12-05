const workers = [
    { name: 'Bob', department: 'sales', title: 'sales manager' },
    { name: 'Tina', department: 'finance', title: 'director of finance' },
    { name: 'Randy', department: 'IT', title: 'hardware guy' },
    { name: 'Glenda', department: 'C-suite', title: 'CEO' },
    { name: 'Barb', department: 'Cool Kids', title: 'sales manager' }
];

// let salesMgr = workers.filter( emp => {
//     return emp.title === "sales manager";
// });

// console.log('sales managers', salesMgr);




// for (i = 0; i < workers.length; i++) {
//     console.log(workers[i].name + "'s job title is " + workers[i].title);
// }

// document.getElementById("btn").addEventListener("click", function(e){
//     console.log("congrats, you clicked a button"), e.target;
// });
//same as...

document.getElementById("btn").addEventListener("click", e => {
    console.log("congrats, you clicked a button", e.target);
});

// //this has to be on one line w/ one argument, returning "Hello"
// document.getElementById("btn").addEventListener("click", e => "Hello");

// let name = "Fred";
// let job = () => "I do the things";
// let number = 4;

// let myCollect = {
//     name,
//     job,
//     number
// }

// let myArr = ["Fred", 5, true, "wut the fuuugs"];

// myArr.forEach( (thing, index) => {
//     console.log(`${index +  1} ${thing}`);
// });

let nums = [1,2,3,4,5,6,7,8,9]

// let newArr = nums.map(thing => {
//     return thing * 2;
// });
let newArr = nums.map(thing => thing * 2);
console.log("newArr", newArr);

 let newerArr =  nums.filter( thing => {
    return thing%2 === 0;
 });
 console.log(newerArr);

 let total = nums.reduce( (thing1, thing2) => thing1 + thing2);
 console.log("total", total);