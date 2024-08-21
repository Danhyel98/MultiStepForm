import { useFormik } from 'formik';
import * as Yup from 'yup';

const StepOne = ({ formData, setFormData, nextStep }) => {
  const formik = useFormik({
    initialValues: { name: formData.name || '', email: formData.email || '' },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
    }),
    onSubmit: (values) => {
      setFormData({ ...formData, ...values });
      nextStep();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
          Name
        </label>
        <input
          id="name"
          name="name"
          {...formik.getFieldProps('name')}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="text-red-500 text-sm mt-2">{formik.errors.name}</div>
        ) : null}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          {...formik.getFieldProps('email')}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-500 text-sm mt-2">{formik.errors.email}</div>
        ) : null}
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Next
      </button>
    </form>
  );
};

export default StepOne;
