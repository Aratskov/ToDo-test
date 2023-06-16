import { useFormik } from 'formik';
import * as yup from 'yup';
import { ButtonHome } from 'components/ButtonHome/ButtonHome';
import y from './Register.module.scss';

export const Register = () => {
  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .matches(
        /^[a-zA-Z0-9]+$/,
        'Can only contain Latin letters, numbers and signs'
      )
      .min(2, 'Minimum length 2 characters')
      .max(32, 'Maximum length 32 characters')
      .required('Name required'),
    email: yup
      .string()
      .matches(
      /^[\w.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Invalid email address. Example: a@a.ua'
    )
      .required('Email required'),
    password: yup
      .string()
      .matches(/^\S*$/, 'Must not contain spaces')
      .matches(
        /^[a-zA-Z0-9]+$/,
        'Can only contain Latin letters, numbers and signs'
      )
      .min(8, 'Minimum length 8 characters')
      .max(64, 'Maximum length 64 characters')
      .required('Password required')
  });

  const formik = useFormik({
    initialValues: {
      name: '',
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
      <label htmlFor="name">
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
          placeholder="Enter your name"
        />
        {formik.touched.name && formik.errors.name && (
          <p className={y.error}>{formik.errors.name}</p>
        )}
      </label>
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
          placeholder="Create a password"
        />
        {formik.touched.password && formik.errors.password && (
          <p className={y.error}>{formik.errors.password}</p>
        )}
      </label>
      <ButtonHome title="Register Now" />
    </form>
  );
};
