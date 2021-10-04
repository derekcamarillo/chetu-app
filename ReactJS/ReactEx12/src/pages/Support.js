import React, {useEffect, useState} from "react";

const Support = () => {
	const [data, setData] = useState([])
	const getCovidData = async () => {
		try {
			const res = await fetch(`https://covid19.mathdro.id/api`);
			const actualData = await res.json();
			console.log(actualData);
			setData(actualData.statewise[0]);
		} catch (err) {
			console.log(err);
		}
	}

	console.log(data)

	useEffect(() => {
		getCovidData();
	}, [])
	return (
		<div className="support">
			<h1>Support us</h1>
		</div>
	);
};

export default Support;