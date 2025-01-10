import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from "./Pages/Gallery.jsx";
import SignUp from "./Pages/SignUp.jsx";
import Village from "./Pages/Village.jsx";
import NoPage from "./Pages/NoPage.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/SignUp" element={<SignUp />} /> */}
        <Route path="/" element={<SignUp />} />
        <Route path="/Village" element={<Village />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
