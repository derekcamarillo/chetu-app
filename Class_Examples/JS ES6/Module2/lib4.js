//declearing variable
let age = 26;


// declearing function
function div(num1,num2)
{
    let res = num1/num2 ;
    document.getElementById("demo6").innerHTML = `<h1> division of given number is ${res}</h1>`;
}
//calling this function from that js file which  are embedded in html means main_module js file


export{age,div};