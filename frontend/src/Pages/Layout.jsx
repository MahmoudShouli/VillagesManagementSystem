import { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Layout() {
  return (
    <div className="min-w-[17%] bg-form min-h-screen flex flex-col justify-between sticky top-0 max-h-screen">
      <div>
        <h1 className="text-3xl font-bold p-7 mb-10 text">Dashboard</h1>
        <nav>
          <ul className="[&>*]:p-4 [&>*]:text-gray-400 [&>*]:font-semibold">
            <Link
              to="/NoPage"
              className="hover:text-gray-200 text-lg w-full flex hover:bg-[#2d3748]"
            >
              Overview
            </Link>
            <Link
              to="/Village"
              className="hover:text-gray-200 text-lg w-full flex hover:bg-[#2d3748]"
            >
              Village Management
            </Link>
            <Link
              to="/NoPage"
              className="hover:text-gray-200 text-lg w-full flex hover:bg-[#2d3748]"
            >
              Chat
            </Link>
            <Link
              to="/Gallery"
              className="hover:text-gray-200 text-lg w-full flex hover:bg-[#2d3748]"
            >
              Gallery
            </Link>
          </ul>
        </nav>
      </div>
      <div className="flex justify-between items-center p-5">
        <div className="flex items-center justify-center">
          <img
            src="path/to/your/photo.jpg"
            alt="Profile"
            className="w-16 h-16 rounded-full mr-2"
          />
          <p>Name</p>
        </div>
        <Link to="/" className="text-red-400 hover:text-red-600">
          Logout
        </Link>
      </div>
    </div>
  );
}

export default Layout;
