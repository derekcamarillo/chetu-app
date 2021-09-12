import React from 'react';
import Card from '../Cards/Cards.jsx';

let currDate = new Date();
currDate = currDate.getHours();
let greeting = "";
const cssStyle = {};
if(currDate > 1 && currDate <12)
	{
		greeting = "Good Morning";
		cssStyle.color = "#00b894";
	}
else if(currDate >= 12 && currDate < 20)
	{
		greeting = "Good Afternoon";
		cssStyle.color = "orange";
	}
else if(currDate >= 20 && currDate < 24)
	{
		greeting = "Good Night";
		cssStyle.color = "black";
	}


const Home = () => {
return (
	<>
	<div>
	<h1>Welcome to Homepage, <span style={cssStyle}> {greeting} </span></h1>
	</div>
	<div>
	<Card />
	</div>
	</>
);
};


export default Home;
