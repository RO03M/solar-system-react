import Sun from "./Sun";
import Planet from "./Planet";
import styles from "./index.module.css";
import { toScalePlanets } from "./data";

const SolarSystem = () => {
    return (
        <div
            className={styles.container}
        >
            {toScalePlanets?.map((planet, key) => (
                <Planet
                    key={key}
                    orbitSize={{
                        w: `${planet?.distance * 100}em`,
                        h: `${planet?.distance * 100}em`
                    }}
                    planetSize={{
                        w: `${planet?.size}em`,
                        h: `${planet?.size}em`
                    }}
                    year={planet?.year}
                    image={planet?.image}
                    color={planet?.color}
                    rotationTime={planet?.rotationTime * 5}
                />
            ))}
            <Sun/>
        </div>
    );
}

export default SolarSystem;