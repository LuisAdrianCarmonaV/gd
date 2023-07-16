import React, { use, useEffect, useState } from "react";
import styles from "../styles/counter.module.css";

function counter() {
  // let count = 0;

  //var estado
  const [count, setCount] = useState(0);

  useEffect(() => {
    //Ir a BDD sacar info y asi
  }, []);

  function incrementar() {
    setCount(count + 1);

    console.log(count);
  }

  function decrementar() {
    setCount(count - 1);
    console.log(count);
  }

  function reset() {
    setCount(0);

    console.log(count);
  }

  return (
    <div className={styles.counter}>
      <h2>Counter: {count}</h2>

      <div className={styles.buttons}>
        <button onClick={incrementar} className={styles.button}>
          +
        </button>

        <button onClick={decrementar} className={styles.button}>
          -
        </button>

        <button onClick={reset} className={styles.button}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default counter;
