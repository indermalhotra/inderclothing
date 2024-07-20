import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../routes/utils/firebase/firebase";
import FormInput from "../form-input/FormInput";
import "./SignUpForm.scss"
import Button from "../button/Button";

function SignUpForm() {
  const defaultFormField = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formField, setFormField] = useState(defaultFormField);
  const { displayName, email, password, confirmPassword } = formField;

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormField({ ...formField, [name]: value });
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    // IF PASSWORD AND CONFIRM PASSWORD NOT MATCH DO NOTHING JUST CONSOLE AND INFORM
    if (password !== confirmPassword) {
      console.log("Password not matched");
      return;
    }

    
    try {
      const response = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      let user = response.user;
      console.log(user)

      createUserDocumentFromAuth(user, displayName)
    } catch (error) {
      console.log("Some problem", error.message);
    }

    
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have account?</h2>
      <span>Sign up with you email and password</span>
      <form onSubmit={formSubmitHandler}>

        <FormInput
          label="Display Name"
          type="text"
          required
          name="displayName"
          value={displayName}
          onChange={handleChange}
        />

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

        <FormInput
          label="Confirm Password"
          type="password"
          required
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />

        <Button  type="submit">Sign Up</Button>
      </form>
    </div>
  );
}

export default SignUpForm;
