import React, { FC, ReactElement, useState } from "react";
import { createUseStyles } from "react-jss";
import fontFamilies from "../config/fontFamily";
import Button from "./common/Button";
import TextInput from "./common/TextInput";

const LOGIN_MESSAGE = "To continue, you have to login as an administrator!";

interface LoginMainProps {}

const LoginMain: FC<LoginMainProps> = (): ReactElement => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const classes = useStyle();

  const handleSubmit = () => {
    console.log({ email, password });
  };

  return (
    <div className={classes.container}>
      <h3 className={classes.message}>{LOGIN_MESSAGE}</h3>

      <h3 className={classes.label}>Email:</h3>
      <TextInput value={email} onChange={setEmail} />
      <h3 className={classes.label}>Password:</h3>
      <TextInput type="password" value={password} onChange={setPassword} />
      <div className={classes.buttons}>
        <Button
          onClick={handleSubmit}
          theme="success"
          className={classes.button}
          label="Submit"
        />
        <Button
          onClick={handleSubmit}
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
  message: {
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
});

export default LoginMain;
