import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./screens/HomePage";
import ProfilePage from "./screens/ProfilePage";
import ItemPage from "./screens/ItemPage";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/item" element={<ItemPage />} />
      </Routes>
    </Router>
  );
};

export default App;
