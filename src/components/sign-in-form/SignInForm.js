
import { useState, useContext } from "react";

import {
  createAuthUserSignInWithEmailAndPassword,
  createUserDocumentFromAuth,
  signinWithGooglePopup,
} from "../../routes/utils/firebase/firebase";

import FormInput from "../form-input/FormInput";
import Button from "../button/Button";

import { UserContext } from "../../context/user.context";

import "./SignInForm.scss";

function SignInForm() {
  const defaultFormField = {
    email: "",
    password: "",
  };

  const userCTX = useContext(UserContext);
  console.log(userCTX);

  const [formField, setFormField] = useState(defaultFormField);
  const { email, password } = formField;

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormField({ ...formField, [name]: value });
  };

  const logGoogleUser = async () => {
    try {
      const response = await signinWithGooglePopup();
      console.log(response);
      userCTX.setCurrentUser(response.user);
      const userDocRef = await createUserDocumentFromAuth(response.user);
    } catch (error) {
      console.log(error.code)
    }
  };

  const logEmailPassUser = async () => {
    try {
      const response = await createAuthUserSignInWithEmailAndPassword(
        email,
        password
      );
      userCTX.setCurrentUser(response.user);
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-credential":
          console.log("Password not correct");
          break;
        case "auth/user-not-found":
          console.log("user not found");
          break;
        default:
          console.log(error);
      }
    }
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    logEmailPassUser();
  };

  return (
    <div className="sign-up-container">
      <h2>Have an account</h2>
      <span>Sign in with you email and password</span>
      <form onSubmit={formSubmitHandler}>
        <FormInput
          label="Email"
          type="email"
          required
          name="email"
          value={email}
          onChange={handleChange}
        />

        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          value={password}
          onChange={handleChange}
        />
        <div className="button-outer-container">
          <Button type="submit">Sign In</Button>
          <Button
            buttonType="google-sign-in"
            type="button"
            onClick={logGoogleUser}
          >
            Sign in with google
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
