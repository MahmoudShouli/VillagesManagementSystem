import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./pages/LoginPage.jsx"
import Overview from "./pages/Overview.jsx"
import ChatPage from "./pages/ChatPage.jsx"
import Gallery from "./pages/Gallery.jsx";
import SignUp from "./pages/SignUp.jsx";
import Village from "./pages/Village.jsx";
import "./index.css"


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Overview" element={<Overview />} />
        <Route path="/ChatPage" element={<ChatPage />} />
        <Route path="/SignUp"  element={<SignUp />} />
        <Route path="/Village" element={<Village />} />
        <Route path="/Gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)