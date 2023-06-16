import { useFormik } from 'formik';
import * as yup from 'yup';
import y from "../Register/Register.module.scss"
import { ButtonHome } from 'components/ButtonHome/ButtonHome';

const validationSchema = yup.object().shape({
  email: yup
      .string()
      .matches(
      /^[\w.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Invalid email address. Example: a@a.ua'
    ),
   password: yup
      .string()
      .matches(/^\S*$/, 'Must not contain spaces')
      .matches(
        /^[a-zA-Z0-9]+$/,
        'Can only contain Latin letters, numbers and signs'
      )
      .min(8, 'Minimum length 8 characters')
      .max(64, 'Maximum length 64 characters')
      .required('Password required'),
});

export const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      console.log(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="Enter your email"
        />
        {formik.touched.email && formik.errors.email && (
          <p className={y.error}>{formik.errors.email}</p>
        )}
      </label>
      <label htmlFor="password">
        <input
          id="password"
          name="password"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder="Confirm a password"
        />
        {formik.touched.password && formik.errors.password && (
          <p className={y.error}>{formik.errors.password}</p>
        )}
      </label>
      <ButtonHome title="Log In Now" />
    </form>
  );
};
