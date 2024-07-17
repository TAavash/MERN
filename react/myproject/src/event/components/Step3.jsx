import React from 'react';

function Step3({ formData }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Confirmation</h2>
      <div className="mb-4">
        <h3 className="font-bold">User Details</h3>
        <p>First Name: {formData.firstName}</p>
        <p>Last Name: {formData.lastName}</p>
        <p>Email: {formData.email}</p>
      </div>
      <div className="mb-4">
        <h3 className="font-bold">Event Details</h3>
        <p>Event Name: {formData.eventName}</p>
        <p>Event Date: {formData.eventDate}</p>
      </div>
    </div>
  );
}

export default Step3;
