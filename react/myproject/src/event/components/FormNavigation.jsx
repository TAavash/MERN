import React from 'react';

function FormNavigation({ nextStep, prevStep }) {
  return (
    <div className="flex justify-between mt-4">
      {prevStep && (
        <button onClick={prevStep} className="bg-gray-300 p-2 rounded">
          Back
        </button>
      )}
      {nextStep && (
        <button onClick={nextStep} className="bg-blue-500 text-white p-2 rounded">
          Next
        </button>
      )}
    </div>
  );
}

export default FormNavigation;
