
import { setFormState } from "@/lib/Redux/authFormStateSlice";
import { Action, Dispatch, UnknownAction } from "@reduxjs/toolkit";
import { useFormik } from "formik";
import * as yup from "yup";
interface IregisterValuse {
  name: string;
  username: string;
  email: string;
  password: string;
  repass: string;
  acceptedTerms: boolean;
}

const Register = ({
  dispatch,
}: {
  dispatch: Dispatch<Action | UnknownAction>;
}) => {
  const initialValues = {
    name: "",
    username: "",
    email: "",
    password: "",
    repass: "",
    acceptedTerms: false,
  };

  const onSubmit = (values: IregisterValuse) => {
    console.log(values);
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: yup.object().shape({
      name: yup
        .string()
        .required("Please enter your full name")
        .min(5, "Minimum name length is 5 characters")
        .max(25, "Maxmum name length is 25 characters"),
      username: yup
        .string()
        .required("Please enter your username")
        .min(5, "Minimum name length is 5 characters")
        .max(15, "Maxmum name length is 15 characters"),
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
      rePassword: yup
        .string()
        .required("Please confirm your password")
        .oneOf(
          [yup.ref("password")],
          "Confirmed password should match password"
        ),
      acceptedTerms: yup
        .boolean()
        .required("You must accept the terms and conditions"),
    }),
  });

  return (
    <div className="login-form">
      <form onSubmit={formik.handleSubmit} className="mb-10">
        <h2 className="font-bold header mb-4 text-white">
          Register to CodeSlu!
        </h2>
        <div className="form-group mb-[1.5rem]">
          <input
            id="name"
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Full name"
          />
          {formik.errors.name && formik.touched.name && (
            <div className="font-normal text-red-500 mt-1">
              <h2>{formik.errors.name}</h2>
            </div>
          )}
        </div>
        <div className="form-group mb-[1.5rem]">
          <input
            id="username"
            type="text"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Username"
          />
          {formik.errors.username && formik.touched.username && (
            <div className="  font-normal text-red-500 mt-1">
              <h2>{formik.errors.username}</h2>
            </div>
          )}
        </div>

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

        <div className="form-group mb-[1.5rem]">
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
        <div className="form-group mb-[1.5rem]">
          <input
            id="repass"
            type="password"
            name="repass"
            value={formik.values.repass}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Confirm Password"
          />
          {formik.errors.repass && formik.touched.repass && (
            <div className="  font-normal text-red-500 mt-1">
              <h2>{formik.errors.repass}</h2>
            </div>
          )}
        </div>

        <div className="form-group mb-[1.5rem] w-fit ">
          <input
            id="acceptedTerms"
            type="checkbox"
            name="acceptedTerms"
            checked={formik.values.acceptedTerms}
            onChange={formik.handleChange}
            className="w-3 h-3  bg-gray-100 border-gray-300 rounded-full focus:ring-transparent dark:focus:ring-transparent dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />

          <label
            htmlFor="acceptedTerms"
            className="ms-2 text-sm font-medium text-white dark:text-gray-300 "
          >
            I agree to the terms and conditions .
          </label>
        </div>
        <button type="submit">Sign Up</button>
        <div className="w-fit mx-auto text-white mt-3 hover:underline">
          <a onClick={() => dispatch(setFormState("login"))} href="#">
            I&apos;m already a member
          </a>
        </div>
      </form>
    </div>
  );
};

export default Register;
