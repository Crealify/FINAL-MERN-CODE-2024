import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PrivateRoute from "./protected/PrivateRoute";
import NotFound from "./components/Notfound";
import BookDetails from "./pages/BookDetails";
import EditBook from "./pages/EditBook";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/bookdetails/:id" element={<BookDetails />} />
        <Route path="/updatebook/:id" element={<EditBook />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
