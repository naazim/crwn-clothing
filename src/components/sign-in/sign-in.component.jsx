import { useState } from "react";
import { connect } from "react-redux";
import FormInput from "../form-input/form-input.component";
import {
  emailSignInStart,
  googleSignInStart
} from "../../redux/user/user.actions";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-in.styles.scss";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: ""
  });

  const { email, password } = userCredentials;

  const handleSubmit = async e => {
    e.preventDefault();
    emailSignInStart(email, password);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setUserCredentials({
      ...userCredentials,
      [name]: value
    });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email & password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="email"
          name="email"
          type="email"
          value={email}
          handleChange={handleChange}
        />
        <FormInput
          label="password"
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
        />

        <div className="buttons">
          <CustomButton type="submit">Submit Form</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(
  null,
  mapDispatchToProps
)(SignIn);
