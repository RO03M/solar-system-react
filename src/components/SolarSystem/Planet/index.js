import Body from "./Body";
import styles from "./index.module.css";
import Orbit from "./Orbit";

const Planet = props => {

    const {
        orbitSize = {
            w: 0,
            h: 0
        },
        planetSize = {
            w: 0,
            h: 0
        },
        rotationTime = 1,
        year = 1,
        image = "",
        color = "red",
        ring,
        ...others
    } = props;

    return (
        <div
            className={styles.container}
            style={{
                width: orbitSize?.w,
                height: orbitSize?.h,
                animationDuration: `${year * 100}s`
            }}
        >
            <Body
                rotationTime={rotationTime}
                image={image}
                ring={ring}
                style={{
                    width: planetSize?.w,
                    height: planetSize?.h,
                    backgroundColor: color,
                    animationDuration: `${year * 100}s`
                }}
            />
        </div>
    );
}

export default Planet;