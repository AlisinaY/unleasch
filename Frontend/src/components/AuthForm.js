import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { sendReqToLogin } from "../store/index";

import Authentication from "../pages/Authentication";
import styles from "./AuthForm.module.css";

export default function AuthForm() {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  function submitHandler(data) {
    dispatch(sendReqToLogin(data));
  }

  return (
    <>
      <div className={styles.form}>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className={styles["form-input"]}>
            <label>Username</label>
            <input
              type="text"
              placeholder="Your Username..."
              {...register("username", { required: true })}
            />
          </div>
          <div className={styles["form-input"]}>
            <label>Password</label>
            <input
              type="password"
              placeholder="Your Password..."
              {...register("password", { required: true })}
            />
          </div>
          <div className={styles["login-btn"]}>
            <input type="submit" value="LOGIN"></input>
          </div>
        </form>
      </div>
      <Authentication />
    </>
  );
}
