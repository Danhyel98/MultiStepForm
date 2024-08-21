import React from 'react';
import emailjs from '@emailjs/browser';

const StepThree = ({ formData, prevStep, resetForm }) => {
  const sendEmail = () => {
    const templateParams = {
      name: formData.name,
      email: formData.email,
      rating: formData.rating,
      comments: formData.comments || 'No comments',
    };

    emailjs.send('service_8ij5qpe', 'template_5qg9gi4', templateParams, 'BhAzOd6_sL7ffVf-v')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        resetForm();
      }, (err) => {
        console.log('FAILED...', err);
      });
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h3 className="text-2xl font-bold mb-4">Review Your Information</h3>
      <p className="mb-2"><strong>Name:</strong> {formData.name}</p>
      <p className="mb-2"><strong>Email:</strong> {formData.email}</p>
      <p className="mb-2"><strong>Rating:</strong> {formData.rating}</p>
      <p className="mb-4"><strong>Comments:</strong> {formData.comments || 'No comments'}</p>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={prevStep}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Back
        </button>
        <button
          type="button"
          onClick={sendEmail}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default StepThree;
