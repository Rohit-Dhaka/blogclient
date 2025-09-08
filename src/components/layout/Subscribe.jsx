import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import api from '../../utils/api'; 

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showBar, setShowBar] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post(
        "/subscriber/subscriberblog",
        { email }
      );
      console.log(response.data);
      setMessage(response.data.message);

      if (response.status === 200 || response.data.message) {
        setShowBar(true);
        setTimeout(() => {
          setMessage("");
          setShowBar(false);
        }, 1500);
        setEmail("");
      }
    } catch (error) {
      console.log(error);
      setMessage("Subscription failed. Please try again.");
    }
  };

  return (
    <section className=" relative">
      <div className="container ">
        <div className="">
          {message && (
            <div className="shadow-lg rounded-md py-2 px-4 absolute top-[4%] translate-x-[-50%] left-[50%] bg-white text-center text-black font-medium z-50 w-[300px]">
              {message}
              {showBar && (
                <div className="h-1 bg-blue-500 mt-2 rounded-full animate-progress" />
              )}
            </div>
          )}
        </div>
        <div className="flex flex-col items-center lg:pt-[181px] sm:pt-[160px] pt-[140px] lg:pb-[316px] sm:pb-[220px] pb-[140px]">
          <h3 className="font-outfit font-medium text-[36px] leading-[100%] text-[#373737]">
            Never Miss a Blog!
          </h3>
          <h6 className="font-outfit font-normal text-[18px] text-[#9A9A9A] text-center pt-[18px] pb-[46px]">
            Subscribe to get the latest blog, new tech, and exclusive news.
          </h6>
          <form
            onSubmit={handleSubmit}
            className="rounded-[6px] flex max-sm:flex-col overflow-hidden w-full max-w-[724px]"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email id"
              className="font-outfit outline-none border-[1px] rounded-s-[6px] px-5 border-solid border-[#C7C7C7] w-full max-sm:py-3 text-[16px] leading-[100%] text-[#9A9A9A]"
              required
            />
            <input
              type="submit"
              value="SUBSCRIBE"
              className="font-outfit font-normal max-sm:mt-4 max-sm:rounded-[6px] text-[16px] text-white bg-[#6257E8] py-3 sm:py-[21px] px-[44px]"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
