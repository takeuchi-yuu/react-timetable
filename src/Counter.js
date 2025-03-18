import { useState } from "react";
import styles from "./Counter.module.css";

const Counter = ({ initialValue }) => {
  const [value, setValue] = useState(initialValue);
  const plus = () => {
    setValue(value + 1);
  };
  const minus = () => {
    setValue(value - 1);
  };
  return (
    <div className={styles.counter}>
      <div className={styles.container}>
        <button onClick={plus} className={styles.plus}>
          +
        </button>
        <span className={styles.value}>{value}</span>
        <button onClick={minus} className={styles.minus}>
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
