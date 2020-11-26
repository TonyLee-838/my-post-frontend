import React, { FC, ReactElement, useState } from "react";
import { useHistory } from "react-router-dom";
import Joi from "joi";

import { login } from "../../api/auth";
import LoginForm from "./LoginForm";

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
  const [hasError, setHasError] = useState(false);
  const history = useHistory();

  const handleEmailChange = (email: string) => {
    if (hasError) setHasError(false);
    setEmail(email);
  };

  const handlePasswordChange = (password: string) => {
    if (hasError) setHasError(false);
    setPassword(password);
  };

  const handleSubmit = async () => {
    setHasError(false);

    //user type invalid email/password
    const { error } = validateData(email, password);
    if (error) return setHasError(true);

    try {
      const { headers, data } = await login(email, password);
      sessionStorage.setItem("x-auth-token", headers["x-auth-token"]);
      sessionStorage.setItem("user_id", data.id);
      history.replace("/edit");
    } catch (error) {
      //user type valid email/password, but didn't match.
      if (error.response.status === 401) {
        setEmail("");
        setPassword("");
        setHasError(true);
      }
    }
  };

  const handleCancel = () => {
    history.goBack();
  };

  return (
    <LoginForm
      onCancel={handleCancel}
      onEmailChange={handleEmailChange}
      onPasswordChange={handlePasswordChange}
      onSubmit={handleSubmit}
      email={email}
      password={password}
      hasError={hasError}
    />
  );
};

export default LoginMain;
