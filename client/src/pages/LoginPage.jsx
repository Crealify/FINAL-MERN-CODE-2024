import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../utils/Loader";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  //useReduer and useRef

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post("http://localhost:8000/api/v1/login", {
        email,
        password,
      });
      const { token } = await res.data; // destructuring the token from response
      localStorage.setItem("token", token); // save token to local storage
      setError("");
      setLoading(false);
      navigate("/");
    } catch (error) {
      setError(error.response.data.message || "An error occurred");
      setLoading(false);
      console.log(error);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96"
        onSubmit={handleSubmit}
      >
        <input
          className="mb-4 w-full py-2 px-3 border-b border-gray-300"
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="mb-4 w-full py-2 px-3 border-b border-gray-300"
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="submit"
          value={"Login"}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        />
      </form>
      <p className="text-red-600">{error}</p>
      <p className="mb-4">Don't have an account?</p>
      <Link className="text-blue-500 hover:text-blue-700" to={"/register"}>
        Click to register here!
      </Link>
    </div>
  );
};

export default LoginPage;
