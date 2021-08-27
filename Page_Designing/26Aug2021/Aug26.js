function validate()
    {
        let username = document.getElementById("username").value;
        let userpassword = document.getElementById("password").value;
        if(username=="Sunil" && userpassword=="password")
            {
                document.getElementById("msg").innerHTML = `Welcome: ${username}`;
                document.getElementById("msg").style.color="Green";
            }
        else
            {
                document.getElementById("msg").innerHTML = `${username} Check your details`;
                document.getElementById("msg").style.color="red";
                document.getElementById("msg").style.fontSize = "x-large";
            }
        }