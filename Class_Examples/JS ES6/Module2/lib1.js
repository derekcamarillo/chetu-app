//declearing variable
let name = "manish";

//making function
function sum(num1,num2)
{
    let s = num1 + num2;
    document.getElementById("demo3").innerHTML = `<h1> sum of ${num1} and ${num2} is: ${s}</h1>`;
}
//calling this function from that js file which  are embedded in html means main_module js file


export{name,sum};
