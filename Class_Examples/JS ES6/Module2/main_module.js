//yha jis file ki need hai usko import kiya hu bridge.js file se. 
// yha bridge file  ek connector ka work kar rha hai library ur es main_module file ke liye.


import { name } from './bridge.js';
import { sum } from './bridge.js';


//calling sum function
sum(10,20);


document.getElementById("demo").innerHTML = `<h1>your name is ${name} </h1>`;
document.getElementById("demo2").innerHTML = `<h1>your middle name is ${mname} </h1>`;
document.getElementById("demo3").innerHTML = `<h1> sum of ${num1} and ${num2} is ${s}</h1>`;


//ab sab need ke according print kar lo yha par.