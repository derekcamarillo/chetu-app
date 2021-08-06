const emp = {
	eno: 101,
	ename: "Neel Maurya",
	esal: 50000,
}
function f1()
	{
		alert(emp.eno + "  " + emp.ename + "  " + emp.esal);
		alert(emp["eno"] +"  " + emp["ename"] + "  " + emp["esal"]);
	}