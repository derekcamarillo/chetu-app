function f1()
	{
		var site = prompt("Enter the Site url want to open.");
		var w = window.open(site, "_blank", "width=500, height=500");
		window.setTimeout(function(){w.close()},5000);
	}