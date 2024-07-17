import { useState } from "react";

const Product = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState("");
  return (
    <div>
      <div className="text-center bg-blue-800 text-white text-xl p-2">
        Add Product
      </div>
      <h1>Email   : {email}</h1>
      <h2>Message : {message}</h2>
      <div>Image  : {image}</div>
      <form className="m-2 border-2 border-black p-2 w-[500px] h-[500px]">
        <div>
          <label htmlFor="Email">Email   :</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className=" border-2 border-black"
            placeholder="Enter Email"
            id="Email"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="Message">Message :</label>
          <input
            onChange={(e) => setMessage(e.target.value)}
            className=" border-2 border-black h-24"
            placeholder="Enter Message"
            id="Message"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="Image">Image :</label>
          <input
            onChange={(e) => setImage(e.target.value)}
            placeholder="Enter Image"
            id="image"
            type="file"
          />
        </div>
      </form>
    </div>
  );
};

export default Product;
