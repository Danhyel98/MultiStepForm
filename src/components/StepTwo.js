import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const StepTwo = ({ formData, setFormData, nextStep, prevStep }) => {
  const formik = useFormik({
    initialValues: { rating: formData.rating || '', comments: formData.comments || '' },
    validationSchema: Yup.object({
      rating: Yup.string().required('Please select a rating'),
    }),
    onSubmit: (values) => {
      setFormData({ ...formData, ...values });
      nextStep();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Rating</label>
        <div className="flex space-x-4">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="rating"
              value="unhappy"
              checked={formik.values.rating === 'unhappy'}
              onChange={() => formik.setFieldValue('rating', 'unhappy')}
              className="form-radio h-4 w-4 text-red-600"
            />
            <span>Unhappy</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="rating"
              value="could be better"
              checked={formik.values.rating === 'could be better'}
              onChange={() => formik.setFieldValue('rating', 'could be better')}
              className="form-radio h-4 w-4 text-yellow-600"
            />
            <span>Could be better</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="rating"
              value="satisfied"
              checked={formik.values.rating === 'satisfied'}
              onChange={() => formik.setFieldValue('rating', 'satisfied')}
              className="form-radio h-4 w-4 text-green-600"
            />
            <span>Satisfied</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="rating"
              value="very satisfied"
              checked={formik.values.rating === 'very satisfied'}
              onChange={() => formik.setFieldValue('rating', 'very satisfied')}
              className="form-radio h-4 w-4 text-blue-600"
            />
            <span>Very Satisfied</span>
          </label>
        </div>
        {formik.touched.rating && formik.errors.rating ? (
          <div className="text-red-500 text-sm mt-2">{formik.errors.rating}</div>
        ) : null}
      </div>

      <div className="mb-4">
        <label htmlFor="comments" className="block text-gray-700 text-sm font-bold mb-2">
          Comments
        </label>
        <textarea
          id="comments"
          name="comments"
          {...formik.getFieldProps('comments')}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={prevStep}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Back
        </button>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default StepTwo;
