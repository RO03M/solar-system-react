import styles from "./index.module.css";

const Orbit = props => {

    const {
        children,
        ...others
    } = props;

    return (
        <div
            {...others}
            className={styles.container}
        >
            {children}
        </div>
    );
}

export default Orbit;