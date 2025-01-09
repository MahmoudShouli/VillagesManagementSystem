import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import Overview from "./pages/Overview"
import ChatPage from "./pages/ChatPage"
import "./index.css"


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Overview" element={<Overview />} />
        <Route path="/ChatPage" element={<ChatPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)