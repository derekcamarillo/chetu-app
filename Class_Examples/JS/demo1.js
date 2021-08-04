function f1()
	{
		//alert("hello");
		//confirm("Do you want to close.")
		//prompt("Enter data ", "Sunil")
		var num1 = parseInt(prompt("Enter the First number:- ",  0));
		var num2 = parseInt(prompt("Enter the Second Number:- ", 0));
		choice = confirm("Do you want to show the Results.")
			if(choice == true)
				{
					var num3 = num1 + num2;
					alert("Result is :-  " + num3);
				}
			else
				{
					alert("User Don't want to show the Results")
				}
	}