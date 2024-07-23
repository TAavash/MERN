import React, { useState } from 'react';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import ProgressBar from './components/ProgressBar';

function Main() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    eventDate: '',
    eventName: '',
  });

  const nextStep = () => setStep(prevStep => prevStep + 1);
  const prevStep = () => setStep(prevStep => prevStep - 1);

  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  switch (step) {
    case 1:
      return (
        <div className="bg-[#D5B94C] container mx-auto p-4 w-[500px] rounded-lg">
          <ProgressBar step={step} />
          <Step1 formData={formData} handleChange={handleChange} nextStep={nextStep} />
        </div>
      );
    case 2:
      return (
        <div className="bg-[#D5B94C] container mx-auto p-4 w-[500px] rounded-lg">
          <ProgressBar step={step} />
          <Step2 formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />
        </div>
      );
    case 3:
      return (
        <div className="bg-[#D5B94C] container mx-auto p-4 w-[500px] rounded-lg">
          <ProgressBar step={step} />
          <Step3 formData={formData} />
          <div className="flex justify-between mt-4">
            <button onClick={prevStep} className="bg-gray-300 p-2 rounded">
              Back
            </button>
            <button onClick={nextStep} className="bg-blue-500 text-white p-2 rounded">
              Confirm
            </button>
          </div>
        </div>
      );
    case 4:
      return (
        <div className="bg-[#D5B94C] container mx-auto p-4 w-[500px] rounded-lg">
          <Step4 />
        </div>
      );
    default:
      return null;
  }
}

export default Main;
