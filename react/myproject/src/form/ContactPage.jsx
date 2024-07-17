// import { useState } from "react";

const ContactPage = () => {
  return (
    <div>
      <div className="bg-cover min-h-screen bg-no-repeat bg-center flex items-center justify-center bg-rose-600">
        <div className="bg-white min-h-screen w-screen mx-auto flex flex-col gap-6 items-center justify-center font-semibold py-[10px] md:py-[50px] text-center">
          <div className="mb-[2px] w-content">
            <div className="text-xl md:text-2xl">Contact to</div>
            <br />
            <div className="flex gap-3 items-center justify-center -mt-[30px]">
              <div className="text-2xl text-red-600  font-bold">Our Team</div>
            </div>
          </div>
          <form action="">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex  mt-3 gap-2 col-span-1 md:col-span-2">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  placeholder="email@gmail.com"
                  className="border-2 pl-3 py-1 rounded-md w-full"
                  id="email"
                />
              </div>

              <div className="flex  mt-3 gap-2 col-span-1 md:col-span-2">
                <label htmlFor="Message">Message</label>
                <input
                  type="textarea"
                  placeholder="Message"
                  className="border-2 pl-3 py-1 rounded-md w-full h-28"
                  id="Message"
                />
              </div>

              <div className="col-span-1 md:col-span-2 flex justify-center gap-2">
                <button
                  type="submit"
                  className="border rounded-lg bg-black text-white mt-6 text-center h-10 w-1/2"
                >
                  Send
                </button>
                <button
                  type=""
                  className="border rounded-lg bg-black text-white mt-6 text-center h-10 w-1/2"
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
