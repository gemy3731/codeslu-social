'use client'
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
const RegisterForm = () => {
  const initialValues = {
    name: "",
    username: "",
    email: "",
    password: "",
    repass: "",
    acceptedTerms: false,
  };

  const onSubmit = (values:IregisterValuse) => {
    console.log(values);
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema:yup.object().shape({
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
          .matches(/^[A-Z][a-z0-9]{5,}$/),
        rePassword: yup
          .string()
          .required("Please confirm your password")
          .oneOf([yup.ref("password")], "Confirmed password should match password"),
          acceptedTerms:yup.boolean().required("You must accept the terms and conditions"),
      }),
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto">
        <div className={formik.errors.name && formik.touched.name ?"relative ":"relative mb-8"}>
          <input
            id="name"
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder=" "
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#7773f2] peer"
          />
          <label
            htmlFor="name"
            className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#f6faff]  px-2 peer-focus:px-2 peer-focus:text-[#7773f2]  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-100 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
          >
            Full name
          </label>
          
        </div>
        {formik.errors.name && formik.touched.name && (
            <div className="  font-normal text-red-600 p-3 rounded-lg mb-4">
              <h2>{formik.errors.name}</h2>
            </div>
          )}

        <div className={formik.errors.username && formik.touched.username?"relative ":"relative mb-8"}>
          <input
            id="username"
            type="text"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder=" "
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#7773f2] peer"
          />
          <label
            htmlFor="username"
            className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#f6faff]  px-2 peer-focus:px-2 peer-focus:text-[#7773f2]  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-100 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
          >
            Username
          </label>
        </div>
        {formik.errors.username && formik.touched.username && (
            <div className="  font-normal text-red-600 p-3 rounded-lg mb-4">
              <h2>{formik.errors.username}</h2>
            </div>
          )}

        <div className={formik.errors.email && formik.touched.email?"relative ":"relative mb-8"}>
          <input
            id="email"
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder=" "
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#7773f2] peer"
          />
          <label
            htmlFor="email"
            className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#f6faff]  px-2 peer-focus:px-2 peer-focus:text-[#7773f2]  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-100 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
          >
            Email address
          </label>
        </div>
        {formik.errors.email && formik.touched.email && (
            <div className="  font-normal text-red-600 p-3 rounded-lg mb-4">
              <h2>{formik.errors.email}</h2>
            </div>
          )}
        <div className={formik.errors.password && formik.touched.password?"relative ":"relative mb-8"}>
          <input
            id="password"
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder=" "
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#7773f2] peer"
          />
          <label
            htmlFor="password"
            className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#f6faff]  px-2 peer-focus:px-2 peer-focus:text-[#7773f2]  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-100 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
          >
            Password
          </label>
        </div>
        {formik.errors.password && formik.touched.password && (
            <div className="  font-normal text-red-600 p-3 rounded-lg mb-4">
              <h2>{formik.errors.password}</h2>
            </div>
          )}

        <div className={formik.errors.repass && formik.touched.repass?"relative ":"relative mb-8"}>
          <input
            id="repass"
            type="password"
            name="repass"
            value={formik.values.repass}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder=" "
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#7773f2] peer"
          />
          <label
            htmlFor="repass"
            className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#f6faff]  px-2 peer-focus:px-2 peer-focus:text-[#7773f2]  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-100 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
          >
            Confirm password
          </label>
        </div>
        {formik.errors.repass && formik.touched.repass && (
            <div className="  font-normal text-red-600 p-3 rounded-lg mb-4">
              <h2>{formik.errors.repass}</h2>
            </div>
          )}

        <div className="flex items-center mb-4 mx-auto w-fit">
          <input
            id="acceptedTerms"
            type="checkbox"
            name="acceptedTerms"
            checked={formik.values.acceptedTerms}
            onChange={formik.handleChange}
            className="w-4 h-4 accent-[#5752e6]  text-[#5752e6] bg-gray-100 border-gray-300 rounded-full focus:ring-[#5752e6] dark:focus:ring-[#5752e6] dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="acceptedTerms"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 "
          >
            I agree to the{" "}
            <a
              href="#"
              className="text-[#5752e6] hover:underline dark:text-blue-500"
            >
              terms and conditions
            </a>
            .
          </label>
        </div>

        <button
          type="submit"
          className="text-white bg-[#7773f2] mx-auto block  hover:bg-[#5752e6] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-7 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-4"
        >
          Register
        </button>
        <div className="w-fit mx-auto text-[#5752e6]">
          <a href="#">I&apos;m already a member</a>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
