import { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="flex items-center justify-center min-h-screen p-5">
      <div className="flex flex-col items-center justify-center bg-form p-5 w-[22%]">
        <h1 className="font-bold text-xl">Sign Up</h1>
        <form className="flex flex-col items-center justify-center [&>*]:w-full w-full [&_*]:text-sm">
          <label>
            Full Name
            <br />
            <input
              type="text"
              className="input-primary"
              placeholder="Enter your full name"
            />
          </label>
          <label>
            UserName
            <br />
            <input
              type="text"
              className="input-primary"
              placeholder="Enter your username"
            />
          </label>
          <label>
            Password
            <br />
            <input
              type="password"
              className="input-primary"
              placeholder="Enter your password"
            />
          </label>
          <button type="submit" className="btn-primary w-full">
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-gray-400 text-sm">
          Already have an account?
          <Link to="/NoPage" className="text-btn hover:text-btn-hover">
            {" "}
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
