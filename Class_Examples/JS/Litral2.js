const emp = {
	eno: 101,
	ename: "Neel Maurya",
	esal: 50000,
	info : function() 
	{
		return this.eno + "  " + this.ename + "  " + this.esal;
	}
}
function f1()
	{
		// alert(emp.eno + "  " + emp.ename + "  " + emp.esal);
		// alert(emp["eno"] +"  " + emp["ename"] + "  " + emp["esal"]);

		//alert(emp.info);// IT show what we can write inside the proram
		alert(emp.info());
	}