import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Products from './components/Products';
import OtpVerification from './components/OtpVerification';
import Registration from "./components/Registration";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/register" element={<Registration />} />
          <Route path="/verify-otp" element={<OtpVerification />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/" element={<Registration />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
