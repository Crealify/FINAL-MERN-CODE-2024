import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();
  // const handleNameChange = (e) => {
  //   setName(e.target.value);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/v1/register", {
        name,
        email,
        password,
        address,
      });
      navigate("/login");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96"
        onSubmit={handleSubmit}
      >
        <input
          className="mb-4 w-full py-2 px-3 border-b border-gray-300"
          type="text"
          placeholder="Enter your name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          className="mb-4 w-full py-2 px-3 border-b border-gray-300"
          type="email"
          placeholder="Enter your email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          className="mb-4 w-full py-2 px-3 border-b border-gray-300"
          type="password"
          placeholder="Enter your password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input
          className="mb-4 w-full py-2 px-3 border-b border-gray-300"
          type="text"
          placeholder="Enter your address"
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
        <input
          type="submit"
          value={"Register"}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        />
      </form>
      <p className="mb-4">Already have an account?</p>
      <Link className="text-blue-500 hover:text-blue-700" to={"/login"}>
        Click to login here!
      </Link>
    </div>
  );
};

export default RegisterPage;
