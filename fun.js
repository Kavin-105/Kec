// const b = function(){
//     console.log("Kavin ");
// }
// function kow(a,b){
//     var c = a + b;
//     console.log("Result:",c)
//     console.log("Kowsick");
// }
// function* count() {
//     yield 1;
//     yield 2;
// }
// var a = parseInt(window.prompt("Enter a number"));
// kow(a,5);
// b();
// const user = count();
// console.log(user.next().value);


// async function fetchData() {
//     const response = await fetch("https://dummyjson.com/user");
//     if(!response.ok) {
//         throw new Error("network error");
//     }
//     const data = await response.json();
//     console.log(data);
//     console.log(data.users[1].firstName);
    
// }
// fetchData();

// setTimeout(function()  {
//     console.log("HELOO");
// }, 5000);

// let date = new Date();

// console.log(date.getFullYear());
// console.log(date.getDay());
// console.log(date.getMonth()+1);
// console.log(date.getTime());

//spread operator:
const ob1 = {name:"kavin",dept:"CSE" };
const ob2 = {age:20 };
const mer = {...ob1,...ob2};
console.log(mer);
console.error(mer)
console.warn("ss");
console.time("Timer");