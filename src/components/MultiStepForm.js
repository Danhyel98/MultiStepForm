import { useState } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: '',
    comments: '',
  });

  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);
  const resetForm = () => {
    setFormData({ name: '', email: '', rating: '', comments: '' });
    setStep(1);
  };

  switch (step) {
    case 1:
      return <StepOne formData={formData} setFormData={setFormData} nextStep={nextStep} />;
    case 2:
      return <StepTwo formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
    case 3:
      return <StepThree formData={formData} prevStep={prevStep} resetForm={resetForm} />;
    default:
      return null;
  }
};

export default MultiStepForm;
