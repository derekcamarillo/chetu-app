function f1()
	{
		// a = window.open("https://htmlcolorcodes.com", "_blank", "width=600 height=600");
        var site = prompt("Enter Site URL:-  ");
        var w = window.open(site,"_blank", "width=600 height=600");
        window.setTimeout(
            function()
                    {
                        //w.close()
                        w = confirm("Do you want to close")
                        if(w == true)
                        {
                            var d = window.close(w,"_blank");
                        }
                        else
                        {
                            alert("User Don't want to close");
                        }
                    }, 5000);
	}
