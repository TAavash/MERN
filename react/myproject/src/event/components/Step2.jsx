import React, { useState } from 'react';

function Step2({ formData, handleChange, nextStep, prevStep }) {
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!formData.eventName) tempErrors.eventName = "Event Name is required";
    if (!formData.eventDate) tempErrors.eventDate = "Event Date is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      nextStep();
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Event Details</h2>
      <label className="block mb-2">Event Name</label>
      <input
        type="text"
        value={formData.eventName}
        onChange={handleChange('eventName')}
        className="border p-2 mb-4 w-full"
      />
      {errors.eventName && <p className="text-red-500">{errors.eventName}</p>}

      <label className="block mb-2">Event Date</label>
      <input
        type="date"
        value={formData.eventDate}
        onChange={handleChange('eventDate')}
        className="border p-2 mb-4 w-full"
      />
      {errors.eventDate && <p className="text-red-500">{errors.eventDate}</p>}

      <div className="flex justify-between mt-4">
        <button onClick={prevStep} className="bg-gray-300 p-2 rounded">
          Back
        </button>
        <button onClick={handleNext} className="bg-blue-500 text-white p-2 rounded">
          Next
        </button>
      </div>
    </div>
  );
}

export default Step2;
