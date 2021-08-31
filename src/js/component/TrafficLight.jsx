import React, { usesState } from "react";
import "../styles/index.scss";
//create your first component

function TrafficLight() {
	const [colorSelected, setColorSelected] = useState("");

	return (
		<div className="traffic-light">
			<button
				className={
					"light red" + (colorSelected == "red") ? " glow" : ""
				}
				onClick={setColorSelected("red")}></button>
			<button
				className={
					"light yellow" + (colorSelected == "yellow") ? "glow" : ""
				}
				onClick={setColorSelected("yellow")}></button>
			<button
				className={
					"light green" + (colorSelected == "green") ? " glow" : ""
				}
				onClick={setColorSelected("green")}></button>
		</div>
	);
}
export default TrafficLight;
