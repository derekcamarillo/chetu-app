import {name} from "./Library.js";
import {sum} from "./Library.js";
import {Test} from "./Library.js";
//import {name, sum, Test} from "./Library.js";//Importing many API's in Single line.

document.body.innerHTML = `<h1> ${name} </h1>`
let t = new Test();
sum();