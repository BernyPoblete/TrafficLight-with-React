import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="traffic-light">
			<div clasName="Light red"></div>
			<div clasName="Light yellow"></div>
			<div clasName="Light green"></div>
		</div>
	);
};

export default Home;
