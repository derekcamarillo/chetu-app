//declearing function
let mname = "kumar";

//making function
function mul(n1,n2)
 {
     let m = n1 * n2;
     document.getElementById("demo4").innerHTML = `<h1> multiplication of ${n1} and ${n2} number is ${m}</h1>`;
 }
 //calling this function from that js file which  are embedded in html means main_module js file

 export{ mname,mul};