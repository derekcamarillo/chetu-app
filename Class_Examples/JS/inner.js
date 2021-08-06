function validate()
	{
		var username = document.getElementById("username").value;
		var userpassword = document.getElementById("userpassword").value;
		if(username=="admin" && userpassword=="pass")
		{
			document.getElementById("msg").innerText="<h1>Welcome User<h1>";
		}
		else
		{
			document.getElementById("msg").innerHTML = "<h1> Invalid User <h1>";
		}
	}