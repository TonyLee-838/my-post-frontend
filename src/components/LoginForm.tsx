import React, { FC, ReactElement } from "react";
import { createUseStyles } from "react-jss";

import TextInput from "./common/TextInput";
import boxShadows from "../config/boxShadow";
import colors from "../config/color";
import fontFamilies from "../config/fontFamily";
import Button from "./common/Button.tsx";

const LOGIN_MESSAGE = "To continue, you have to login as an administrator!";
const ERROR_MESSAGE = "Wrong Email of Password provided!";

interface LoginFormProps {
  hasError: boolean;
  email: string;
  password: string;
  onEmailChange: Function;
  onPasswordChange: Function;
  onSubmit: React.MouseEventHandler;
  onCancel: React.MouseEventHandler;
}

const LoginForm: FC<LoginFormProps> = ({
  hasError,
  email,
  password,
  onEmailChange,
  onPasswordChange,
  onSubmit,
  onCancel,
}): ReactElement => {
  const classes = useStyle({ hasError });
  return (
    <div className={classes.container}>
      <h3 className={classes.loginMessage}>{LOGIN_MESSAGE}</h3>

      <h3 className={classes.label}>Email:</h3>
      <TextInput
        value={email}
        onChange={onEmailChange}
        className={classes.email}
      />
      <h3 className={classes.label}>Password:</h3>
      <TextInput
        type="password"
        value={password}
        onChange={onPasswordChange}
        className={classes.password}
      />
      {hasError && <p className={classes.warningMessage}>{ERROR_MESSAGE}</p>}
      <div className={classes.buttons}>
        <Button
          onClick={onSubmit}
          theme="success"
          className={classes.button}
          label="Submit"
          disable={hasError}
        />
        <Button
          onClick={onCancel}
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

export default LoginForm;
