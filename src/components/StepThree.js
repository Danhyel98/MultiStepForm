import emailjs from '@emailjs/browser';

const StepThree = ({ formData, prevStep, resetForm }) => {
  const sendEmail = () => {
    const templateParams = {
      name: formData.name,
      email: formData.email,
      rating: formData.rating, // Include the rating here
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
    <div>
      <h3>Review Your Information</h3>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Rating: {formData.rating}</p> {/* Display the rating */}
      <p>Comments: {formData.comments || 'No comments'}</p>

      <button type="button" onClick={prevStep}>Back</button>
      <button type="button" onClick={sendEmail}>Send</button>
    </div>
  );
};

export default StepThree;
