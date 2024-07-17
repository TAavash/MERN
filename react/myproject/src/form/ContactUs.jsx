import { useState } from "react";

const ContactUs = () => {
  const [formValues, setFormValues] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formValues.name) tempErrors.name = "Message is required";
    if (!formValues.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      tempErrors.email = "Email is invalid";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Simulate form submission
      console.log("Form submitted successfully");
      setSubmissionStatus("success");
      setFormValues({ name: "", email: "" });
    } else {
      setSubmissionStatus("error");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      {submissionStatus === "success" && (
        <div className="mb-4 p-2 bg-green-200 text-green-800 rounded">
          Form submitted successfully!
        </div>
      )}
      {submissionStatus === "error" && (
        <div className="mb-4 p-2 bg-red-200 text-red-800 rounded">
          Please fix the errors before submitting.
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1">Email:</label>
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="you&me@gmail.com"
          />
          {errors.email && <p className="text-red-600">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label className="block mb-1">Message:</label>
          <textarea
            name="name"
            value={formValues.name}
            onChange={handleChange}
            className="w-full p-2 border rounded h-24"
            placeholder="Write your message here..."
          />
          {errors.name && <p className="text-red-600">{errors.name}</p>}
        </div>
        <button
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
