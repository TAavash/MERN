import React, { useState } from 'react';

function Step1({ formData, handleChange, nextStep }) {
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!formData.firstName) tempErrors.firstName = "First Name is required";
    if (!formData.lastName) tempErrors.lastName = "Last Name is required";
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email address is invalid";
    }
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
      <h2 className="text-xl font-bold mb-4">User Details</h2>
      <label className="block mb-2">First Name</label>
      <input
        type="text"
        value={formData.firstName}
        onChange={handleChange('firstName')}
        className="border p-2 mb-4 w-full"
      />
      {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}

      <label className="block mb-2">Last Name</label>
      <input
        type="text"
        value={formData.lastName}
        onChange={handleChange('lastName')}
        className="border p-2 mb-4 w-full"
      />
      {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}

      <label className="block mb-2">Email</label>
      <input
        type="email"
        value={formData.email}
        onChange={handleChange('email')}
        className="border p-2 mb-4 w-full"
      />
      {errors.email && <p className="text-red-500">{errors.email}</p>}

      <div className="flex justify-between mt-4">
        <button onClick={handleNext} className="bg-blue-500 text-white p-2 rounded">
          Next
        </button>
      </div>
    </div>
  );
}

export default Step1;
