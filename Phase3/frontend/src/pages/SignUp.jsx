import { Link } from "react-router-dom";
import { useState } from "react";
import { register } from "../apiService";
import { useAdmin } from "../AdminContext";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setAdmin } = useAdmin();
  const navigate = useNavigate();

  const SubmitSignUp = async (e) => {
    e.preventDefault();
    const data = await register(userName, password, fullName);
    console.log(data);
    if (data) {
      setError("");
      setAdmin(fullName);
      navigate("/Overview");
    } else {
      setError("The username is already taken");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-5">
      <div className="flex flex-col items-center justify-center bg-form p-5 w-[22%]">
        <h1 className="font-bold text-xl">Sign Up</h1>
        <form
          onSubmit={SubmitSignUp}
          className="flex flex-col items-center justify-center [&>*]:w-full w-full [&_*]:text-sm"
        >
          <label>
            Full Name
            <br />
            <input
              type="text"
              className="input-primary"
              placeholder="Enter your full name"
              onChange={(e) => setFullName(e.target.value)}
            />
          </label>
          <label>
            UserName
            <br />
            <input
              type="text"
              className="input-primary"
              placeholder="Enter your username"
              onChange={(e) => setUserName(e.target.value)}
            />
          </label>
          <label>
            Password
            <br />
            <input
              type="password"
              className="input-primary"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit" className="btn-primary w-full">
            Sign Up
          </button>
          {error !== "" && (
            <p className="mt-2 text-red-600 text-lg font-semibold text-center">
              {error}
            </p>
          )}
        </form>
        <p className="mt-4 text-gray-400 text-sm">
          Already have an account?
          <Link to="/" className="text-btn hover:text-btn-hover">
            {" "}
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
