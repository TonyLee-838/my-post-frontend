import React, { FC, ReactElement, useState } from "react";
import { useHistory } from "react-router-dom";
import { createUseStyles } from "react-jss";
import Joi from "joi";

import { login } from "../api/auth";
import TextInput from "./common/TextInput";
import boxShadows from "../config/boxShadow";
import colors from "../config/color";
import fontFamilies from "../config/fontFamily";
import Button from "./common/Button.tsx";

const LOGIN_MESSAGE = "To continue, you have to login as an administrator!";
const NOT_MATCH_MESSAGE = "Wrong Email of Password provided!";
const INVALID_MESSAGE = "You have to provide valid email/password!";

const validateData = (email: string, password: string) => {
  return Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),
    password: Joi.string().required(),
  }).validate({ email, password });
};

const LoginMain: FC = (): ReactElement => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  const classes = useStyle({ hasError: errorMessage });

  const handleEmailChange = (email: string) => {
    if (errorMessage) setErrorMessage("");
    setEmail(email);
  };

  const handlePasswordChange = (password: string) => {
    if (errorMessage) setErrorMessage("");
    setPassword(password);
  };

  const handleSubmit = async () => {
    setErrorMessage("");

    //user type invalid email/password
    const { error } = validateData(email, password);
    if (error) return setErrorMessage(INVALID_MESSAGE);

    try {
      const { data } = await login(email, password);
      sessionStorage.setItem("x-auth-token", data);
      history.replace("/edit");
    } catch (error) {
      //user type valid email/password, but didn't match.
      if (error.response.status === 401) {
        setEmail("");
        setPassword("");
        setErrorMessage(NOT_MATCH_MESSAGE);
      }
    }
  };

  return (
    <div className={classes.container}>
      <h3 className={classes.loginMessage}>{LOGIN_MESSAGE}</h3>

      <h3 className={classes.label}>Email:</h3>
      <TextInput
        value={email}
        onChange={handleEmailChange}
        className={classes.email}
      />
      <h3 className={classes.label}>Password:</h3>
      <TextInput
        type="password"
        value={password}
        onChange={handlePasswordChange}
        className={classes.password}
      />
      {errorMessage && <p className={classes.warningMessage}>{errorMessage}</p>}
      <div className={classes.buttons}>
        <Button
          onClick={handleSubmit}
          theme="success"
          className={classes.button}
          label="Submit"
          disable={!!errorMessage}
        />
        <Button
          onClick={() => history.goBack()}
          theme="warning"
          className={classes.button}
          label="Cancel"
        />
      </div>
    </div>
  );
};

const useStyle = createUseStyles({
  container: {
    flexDirection: "column",
    margin: "10% auto",
  },
  loginMessage: {
    fontFamily: fontFamilies.text,
    fontSize: "1.25rem",
  },
  label: {
    margin: "20px 0 5px 0",
    fontFamily: fontFamilies.text,
  },
  button: {
    width: "max-content",
    marginRight: "15px",
  },
  buttons: {
    marginTop: "20px",
    display: "flex",
  },
  email: {
    boxShadow: ({ hasError }) => (hasError ? boxShadows.warning : ""),
  },
  password: {
    boxShadow: ({ hasError }) => (hasError ? boxShadows.warning : ""),
  },
  warningMessage: {
    margin: 0,
    fontFamily: fontFamilies.text,
    color: colors.warning,
  },
});

export default LoginMain;
