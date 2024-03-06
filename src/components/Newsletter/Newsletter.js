"use client";
import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Newsletter = () => {
  let [FormValue, SetFormValue] = useState({ email: "" });

  const inputOnChange = (name, value) => {
    SetFormValue((FormValue) => ({
      ...FormValue,
      [name]: value,
    }));
  };

  const FormSubmit = async (e) => {
    e.preventDefault();
    if (FormValue.email.length === 0) {
      toast.error("Email Required");
    }

    const rawResponse = await axios.post("/api/sendEmail", FormValue);
    const statusCode = rawResponse.status;
    if (statusCode === 200) {
      toast.success("Request Completed");
      SetFormValue({email: ""});
    } else {
      toast.error("Request Fail");
    }
  };

  return (
    <div className="pt-[91px] pb-[136px] px-5">
      <div className="lg:w-[596px] mx-auto">
        <div className="lg:w-[516px] mx-auto mb-10">
          <div className="lg:w-[495px] mx-auto text-center">
            <h5 className="text-xl font-medium text-[#20B15A] uppercase leading-[30px] mb-[22px]">
              SUBSCRIBE
            </h5>
            <h2 className="text-[30px] font-semibold leading-[45px]">
              Subscribe to get the latest <br /> news about us
            </h2>
          </div>
          <p className="text-base font-medium text-[#8B8B8B]">
            Please drop your email below to get daily update about what we do
          </p>
        </div>
        <div>
          <form className="newsletter" onSubmit={FormSubmit}>
            <input
              value={FormValue.email}
              onChange={(e) => {
                inputOnChange("email", e.target.value);
              }}
              className="outline-none"
              name="email"
              type="email"
              placeholder="hello@example.com"
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <Toaster position="bottom-center"/>
    </div>
  );
};

export default Newsletter;
