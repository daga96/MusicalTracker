import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Musicals from "./pages/Musicals";

function App() {
  return (
    <div className="w-screen h-screen ">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/musicals" element={<Musicals />} />
          {/*<Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
