import { useRef, useState } from "react";
import { motion, useDragControls, useMotionValue, useTransform } from "framer-motion";

import './App.css';
import SolarSystem from './components/SolarSystem';

const MAX_SCALE = 100;
const MIN_SCALE = 1;

function App() {

	const [scale, SetScale] = useState(1.0);

	const dragRef = useRef(null);

	const dragControls = useDragControls();
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const transformX = useTransform(x, value => value * 0.05);
	const transformY = useTransform(y, value => value * 0.05);

	const bounds = dragRef?.current?.getBoundingClientRect();
	
	const handleWheel = e => {
		let deltaY = e.deltaY * -0.001 * scale / 2;
		let tempScale = scale + deltaY;
		if (tempScale < MIN_SCALE) tempScale = MIN_SCALE;
		else if (tempScale >= MAX_SCALE) tempScale = MAX_SCALE;
		SetScale(tempScale);
	}
	
	return (
		<motion.div
			className={"galaxy"}
			style={{
				x: transformX,
				y: transformY,
				scale: 1.1
			}}
		>
			<motion.div
				drag
				dragControls={dragControls}
				dragConstraints={{
					left: -bounds?.width / 2.5 * scale,
					right: bounds?.width / 2.5 * scale,
					top: -bounds?.height / 5 * scale,
					bottom: bounds?.height / 5 * scale
				}}
				style={{
					x, y
				}}
				ref={dragRef}
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
		</motion.div>
	);
}

export default App;
