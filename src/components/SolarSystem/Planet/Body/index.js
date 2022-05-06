import styles from "./index.module.css";

const Body = props => {

    const {
        image,
        rotationTime,
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
        </div>
    );
}

export default Body;