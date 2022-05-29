import { saturnRing } from "./data";

const Ring = () => {
    return (
        <div
            style={{
                width: "220%",
                height: "220%",
                position: "absolute",
                transform: "translate(-50%, -50%) rotateX(70deg)",
                top: "50%",
                left: "50%",
                ...saturnRing
            }}
        />
    );
}

export default Ring;