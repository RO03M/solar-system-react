import { useState } from "react";
import { motion } from "framer-motion";

import './App.css';
import SolarSystem from './components/SolarSystem';

function App() {

	const [scale, SetScale] = useState(1.0);

	const handleWheel = e => {
		let deltaY = e.deltaY * -0.001;
		let tempScale = scale + deltaY;
		if (tempScale < 1) tempScale = 1;
		else if (tempScale >= 10) tempScale = 10;
		SetScale(tempScale);
	}

	return (
		<motion.div
			drag
		>
			<motion.div
				onWheel={handleWheel}
				style={{
					transition: "0.5s",
					transform: `scale(${scale})`
				}}
			>
				<SolarSystem/>	
			</motion.div>
		</motion.div>
	);
}

export default App;
