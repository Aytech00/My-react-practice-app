import React from "react";
import styles from "./FirstOutput.module.css";

const FirstOutput = (props) => {
  return (
    <div className={styles.users}>
      <ul>
        {props.items.map((info) => (
          <div>
            <li>{info.Name}</li>
            <li>{info.Email}</li>
            <li>{info.Password}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default FirstOutput;
