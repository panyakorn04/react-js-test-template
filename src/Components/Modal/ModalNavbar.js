import React, { useContext } from "react";
import styled from "styled-components";

import { ModalContext } from "../../hooks";
import SignupForm from "../SignupForm/SignupForm";
import SigninForm from "../SigninFrom/SigninFrom";
import Backdrop from "../Backgrop";

const Div = styled.div`
  margin: 0 auto;
  margin-top: -4rem;
  width: 60%;
`;

const Modal = () => {
  const { signupOpen, signinOpen } = useContext(ModalContext);
  console.log("Modal rendered");
  return (
    <>
      {(signupOpen || signinOpen) && <Backdrop />}

      {signupOpen && (
        <Div>
          <SignupForm />
        </Div>
      )}
      {signinOpen && (
        <Div>
          <SigninForm />
        </Div>
      )}
    </>
  );
};

export default Modal;
