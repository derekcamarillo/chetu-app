function myFunction()
        {
            
            var x =  document.getElementById("select").value;
            var fn = parseInt(document.getElementById("num1").value);
            var sn = parseInt(document.getElementById("num2").value);
            var rn = document.getElementById("num3");


            switch(x)
            {
                case "Select":
                    rn.value ="";
            return;
                case "+":
                    rn.value = fn + sn;
                    break;
                case "-":
                    rn.value = fn - sn;
                    break;
                case "*":
                    rn.value = fn * sn;
                    break;
                case "/":
                    rn.value = fn / sn;
                    break;
                case "%":
                    rn.value = fn % sn;
                    break;
                case "**":
                    rn.value = fn * fn;
                    break;
                case "***":
                    rn.value = fn * fn * fn;
                    break;
            }
        }
