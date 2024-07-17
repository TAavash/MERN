// import { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

const LoginPage = () => {
    // const [email, setEmail] = useState();
    // const [password, setPassword] = useState();

    // const handleEmailChange = (e) => {
    //   const currentEmail = e.target.value;
    //   setEmail(currentEmail);
    // };

  return (
    <div className="bg-cover min-h-screen bg-no-repeat bg-center flex items-center justify-center ">
      <div className="w-[50%] h-screen bg-rose-600 flex justify-center items-center"><h1 className="text-white">Img</h1></div>
      <div className="bg-white/70 rounded-[30px] w-[50%] mx-auto flex flex-col gap-7 items-center justify-center font-semibold py-[50px] md:py-[90px] text-center">
        <div className="border-b-2 border-white/0 ">
          <div className="mb-[10px] w-content">
            <div className="text-xl md:text-2xl">Login Page</div>
          </div>
          <div className="text-sm md:text-l mb-[10px] mt-[15px]">
            Log in to start booking.
          </div>
          <form
            action=""
            className="flex flex-col items-center justify-center mt-[30px]"
          >
            <div className="flex flex-col gap-5">
              <div className="relative">
                <input
                  type="email"
                  className="peer min-w-[200px] md:min-w-[300px] rounded-[10px] h-[50px] pl-[50px] md:pl-[70px]"
                  placeholder="Email"
                  //   onChange={handleEmailChange}
                />
                <div className="absolute top-1/2 text-xl md:text-2xl transform -translate-y-1/2 ml-[10px] text-gray-500">
                  <FaUserAlt />
                </div>
              </div>
              <div className="relative">
                <input
                  type="password"
                  className={`peer min-w-[200px] md:min-w-[300px] rounded-[10px] h-[50px] pl-[50px] md:pl-[70px] 
                  }`}
                  //   onChange={(e) => {
                  //     setPassword(e.target.value);
                  //   }}
                  placeholder="Password"
                />
                <div className="absolute top-1/2 text-xl md:text-2xl transform -translate-y-1/2 ml-[10px] text-gray-500">
                  <RiLockPasswordFill />
                </div>
              </div>

              <div className="w-full mx-auto bg-green-600 text-white py-[6px] -mt-[4px]">
                Log In
              </div>
            </div>
          </form>
          <div className="mt-[5px] text-end md:mb-[20px] text-[14px] underline cursor-pointer">
            Forgot Password ?
          </div>
        </div>

        <div className="flex gap-1">
          Tap to{" "}
          <div className="text-blue-600 font-bold italic cursor-pointer">
            create an account
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
