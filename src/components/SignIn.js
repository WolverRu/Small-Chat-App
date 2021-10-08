import React from "react";
import firebase from "firebase";
import { auth } from "../firebase.js";
import { Button } from "@material-ui/core";

/**
 * @author
 * @function SignIn
 **/

const SignIn = (props) => {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <Button
        style={{
          padding: "30px",
          fontSize: "20px",
          borderRadius: "0",
          fontWeight: "600",
        }}
        onClick={signInWithGoogle}
      >
        <img
          src="https://img.icons8.com/color/100/000000/google-logo.png"
          alt="google"
        />
        Sign In With Google
      </Button>
    </div>
  );
};

export default SignIn;
