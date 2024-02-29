"use client";
import React, { FC, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiFillGithub,
} from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { styles } from "../../styles/style";

type LoginProps = {
  setRoute: (route: string) => void;
};

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Email is Invalid!")
    .required("Please Enter Your Email"),
  password: Yup.string().required("Please Enter Your Password").min(6),
});

const Login: FC<LoginProps> = (props) => {
  const [show, setShow] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: schema,
    onSubmit: async ({
      email,
      password,
    }: {
      email: String;
      password: String;
    }) => {
      console.log(email, password);
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <>
      <div className="w-full">
        <h1 className={`${styles.title}`}>Login With ELearning</h1>

        <form onSubmit={handleSubmit}></form>
      </div>
    </>
  );
};

export default Login;
