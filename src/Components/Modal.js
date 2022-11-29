import React from "react";
import Button from "./Button";
import styles from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div className={styles.main}>
        <div>

      
      <header className={styles.head}>{props.title}</header>

      <div className={styles.inner}>
        <p>{props.message}</p>
      </div>

      <footer className={styles.footer}>
        <Button onClick={props.onConfirm} >Okay</Button>
    </footer>
    </div>

    
    </div>
  );
};

export default Modal;
