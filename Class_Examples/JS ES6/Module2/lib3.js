//declearing variable
let lname = "vishwakarma";


//making function
function sub(num1,num2)
{
    let res = num1 - num2 ;
    document.getElementById("demo5").innerHTML = `<h1> subtraction of ${num2} from ${num1} is ${res}</h1>`;
} 
//calling this function from that js file which  are embedded in html means main_module js file

export{ lname,sub };
