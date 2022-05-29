import styles from "./index.module.css";
import Ring from "./Ring";

const Body = props => {

    const {
        image,
        rotationTime,
        ring,
        ...others
    } = props;

    return (
        <div
            className={styles.container}
            {...others}
        >
            <div
                className={styles.map}
                style={{
                    backgroundImage: `url(${image})`,
                    animationDuration: `${rotationTime}s`
                }}
            />
            {ring && (
                <Ring/>
            )}
        </div>
    );
}

export default Body;