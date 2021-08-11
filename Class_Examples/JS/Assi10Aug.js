//Function is used for print in Asscending order
function f2(){
       function f1(arr)
            {
                var i=0, j;
                while (i < arr.length)
                    {
                        j = i + 1;
                        while (j<arr.length)
                            {
                                if(arr[j]<arr[i])
                                    {
                                        var temp = arr[i];
                                        arr[i] = arr [j];
                                        arr[j] = temp;
                                    }
                                    j++;
                            }
                            i++;
                    }
            }

    var arr = [10, 15, 90, 84, 35, 22, 1, 8, 28];
    document.write("<h3>Original Array<br></h3>");
    document.write(arr + "<br>");
    f1(arr);
    document.write("<h3>Shorted Array<br></h3>")
    document.write(arr)
}

//Function is used for print in Desscending order
function f3(){
       function f1(arr)
            {
                var i=0, j;
                while (i < arr.length)
                    {
                        j = i + 1;
                        while (j<arr.length)
                            {
                                if(arr[j]>arr[i])
                                    {
                                        var temp = arr[i];
                                        arr[i] = arr [j];
                                        arr[j] = temp;
                                    }
                                    j++;
                            }
                            i++;
                    }
            }

    var arr = [10, 15, 90, 84, 35, 22, 1, 8, 28];
    document.write("<h3>Original Array<br></h3>");
    document.write(arr + "<br>");
    f1(arr);
    document.write("<h3>Shorted Array<br></h3>")
    document.write(arr)
}

//Function is used for to find Maximum value of array.
function f4()
	{
		// alert("hellovar")
		var arr = [10, 15, 90, 84, 35, 22, 1, 8, 28];
		document.write("<h3>Original Array<br></h3>");
		document.write(arr + "<br>");
		var l = arr.length;
		var max = -l;
		for (var i = 0; l > i; i++)
			{
				if(arr[i] > max)
					{
						max = arr[i];
					}
			}
		document.write("<h4>Maximum value of Array is :-  " +max +"</h3>")
	}


//Function is used for to find Minimum value of array.
function f5()
	{
		// alert("hellovar")
		var arr = [10, 15, 90, 84, 35, 22, 1, 8, 28];
		document.write("<h3>Original Array<br></h3>");
		document.write(arr + "<br>");
		var l = arr.length;
		var min = l;
		for (var i = 0; l > i; i++)
			{
				if(arr[i] < min)
					{
						min = arr[i];
					}
			}
		document.write("<h4>Minimum value of Array is :-  " + min +"</h3>")
	}

// Function is used for Find Even or Odd.

function f6()
	{
		// alert("hellovar")
		var arr = [10, 15, 90, 84, 35, 22, 1, 8, 28];
		var evens = [];
		var odds = [];
		document.write("<h3>Original Array<br></h3>");
		document.write(arr + "<br>");
		var evennum = function(arr)
			{
				for(var i = 0; i<arr.length; i++)
					{
						if(arr[i] % 2 === 1)
							{
								document.write("<h4>Evens value of Array is :-  " + arr[i] +"</h3>")
							}
					}
			}
		
	}