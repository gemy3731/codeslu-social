import { setFormState } from "@/lib/Redux/authFormStateSlice";
import { Action, Dispatch, UnknownAction } from "@reduxjs/toolkit";
import { useFormik } from "formik";
import * as yup from "yup";
interface IForgotValuse {
  email: string;
}
const ForgotPass = ({
  dispatch,
}: {
  dispatch: Dispatch<Action | UnknownAction>;
}) => {
  const initialValues = {
    email: "",
  };
  const onSubmit = (values: IForgotValuse) => {
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
    }),
  });
  return (
    <div className="login-form">
      <form onSubmit={formik.handleSubmit} className="mb-10">
        <h2 className="font-bold header mb-4 text-white">Forgot Password!</h2>
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

        <button type="submit">Send</button>
        <div className=" text-right mt-[1rem] flex flex-col hover:underline">
          <a
            href="#"
            onClick={() => {
              dispatch(setFormState("login"));
            }}
            className="text-white"
          >
            Back to login?
          </a>
        </div>
      </form>
    </div>
  );
};

export default ForgotPass;
