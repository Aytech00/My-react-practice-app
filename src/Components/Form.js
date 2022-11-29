import "./Form.css";
import React, { useState, useRef } from "react";
import Wrap from "./UI/Wrap";
import Button from "./Button";
import Modal from "./Modal";

const Form = (props) => {
  const enteredName = useRef();
  const enteredEmail = useRef();
  const enteredPassWord = useRef();

  const [isValid, setIsValid] = useState();

  const formSubmit = (e) => {
    e.preventDefault();

    const subMittedName = enteredName.current.value;
    const subMittedEmail = enteredEmail.current.value;
    const subMittedPassWord = enteredPassWord.current.value;

    if (subMittedName.length === 0 || subMittedEmail.length === 0 || subMittedPassWord.length === 0) {
      setIsValid({
        title: "Invalid input",
        message: "Please input valid details",
      });

      return;
    } 


    const data = {
      Name: subMittedName,
      Email: subMittedEmail,
      Password: subMittedPassWord,
    };

    props.onSavedData(data);

   
  };

  const errHandler = () => {
    setIsValid(null);
  };

  return (
    <div className="form-container">
      <Wrap className="form-inner-container">
        <div>
          {isValid && (
            <Modal
              title={isValid.title}
              message={isValid.message}
              onConfirm={errHandler}
            />
          )}

          <form onSubmit={formSubmit}>
            <div className="name-wrap">
              <div className={`label-wrap`}>
                <label>Name</label>
              </div>
              <input type="text" ref={enteredName}></input>
            </div>

            <div className="email-wrap">
              <div className="label-wrap">
                <label>Email</label>
              </div>

              <div>
                <input type="email" ref={enteredEmail}></input>
              </div>
            </div>

            <div className="passw-wrap">
              <div className="label-wrap">
                <label>Password</label>
              </div>

              <input type="number" ref={enteredPassWord}></input>
            </div>

            <div className="btn-wrap">
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </div>
      </Wrap>
    </div>
  );
};

export default Form;
