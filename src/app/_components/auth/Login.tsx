import { setFormState } from "@/lib/Redux/authFormStateSlice";
import { Action, Dispatch, UnknownAction } from "@reduxjs/toolkit";
import { useFormik } from "formik";
import Link from "next/link";
import { BsApple } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import * as yup from "yup";
interface ILoginValuse {
  email: string;
  password: string;
}

const Login = ({
  dispatch,
}: {
  dispatch: Dispatch<Action | UnknownAction>;
}) => {
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values: ILoginValuse) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .required("Email required")
        .email("Enter invalid email"),
      password: yup
        .string()
        .required("Password required")
        .matches(
          /^[A-Z][a-z0-9]{5,}$/,
          "Password must start with a capital letter then 5 or more characters"
        ),
    }),
  });

  return (
    <div className="glass-form lg:min-w-[500px] col-span-1 md:ml-auto py-14 px-10 pt-8">
      <form onSubmit={formik.handleSubmit} className="mb-10">
        <h2 className="font-bold header mb-4 text-white">Login to CodeSlu!</h2>
        <div className="form-group mb-[1.5rem]">
          <input
            id="email"
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Email"
          />
          {formik.errors.email && formik.touched.email && (
            <div className="  font-normal text-red-500 mt-1">
              <h2>{formik.errors.email}</h2>
            </div>
          )}
        </div>
        <div className="form-group mb-[0.5rem]">
          <input
            id="password"
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Password"
          />
          {formik.errors.password && formik.touched.password && (
            <div className="  font-normal text-red-500 mt-1">
              <h2>{formik.errors.password}</h2>
            </div>
          )}
        </div>
        <div className=" text-left mb-[2rem] flex flex-col">
          <Link
            href="#"
            onClick={() => {
              dispatch(setFormState("forgotPass"));
            }}
            className="text-white"
          >
            Forgot Password?
          </Link>
          <Link
            href="#"
            onClick={() => {
              dispatch(setFormState("register"));
            }}
            className="text-white"
          >
            Don&apos;t have an account?{" "}
            <span className="text-[#ffffff]">Sign up</span>
          </Link>
        </div>
        <button type="submit">Sign In</button>
      </form>
      <div className="relative flex justify-center">
        <p className="anotherLogin text-[#ffffff4d]    w-fit z-10">
          or login with
        </p>
      </div>
      <div className="flex justify-center gap-6 mt-5">
        <div className="loginMethods">
          <FcGoogle className="text-[40px]" />
        </div>
        <div className="loginMethods">
          <FaFacebookF className="text-[40px] text-blue-700" />
        </div>
        <div className="loginMethods">
          <BsApple className="text-[40px] text-black" />
        </div>
      </div>
    </div>
  );
};

export default Login;
