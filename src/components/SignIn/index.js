import React from "react";
import styles from "./SignIn.module.scss";
import {
  FormLayout,
  FormTitle,
  Field,
  SubmitButton
} from "../shared/components/Form";
import google from "../shared/assets/google.svg";
class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      login: "",
      password: ""
    };
  }

  submit() {
    console.log(this.state);
  }
  render() {
    return (
      <div className={styles.signinContainer}>
        <FormLayout>
          <FormTitle>Sign in</FormTitle>
          <Field
            label="Login"
            type="text"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <Field
            label="Password"
            type="password"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <a href="/users/google-oauth/">
            <div class={styles.googlesignin}>
              <div class={styles.googleimg}>
                <img width="20px" alt='Google "G" Logo' src={google} />
              </div>
              Login with Google
            </div>
          </a>
          <SubmitButton onSubmit={this.submit.bind(this)}>Sign In</SubmitButton>
        </FormLayout>
      </div>
    );
  }
}

export default SignIn;
