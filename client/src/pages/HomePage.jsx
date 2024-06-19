import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../utils/Loader";
import { Link } from "react-router-dom";
import RecipeReviewCard from "./Card";

const HomePage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  // we cant use async await inside useeffect
  useEffect(() => {
    getAllBooks();
  }, []);

  const getAllBooks = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:8000/api/v1/allbooks");
      const books = await res.data;
      setBooks(books);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">All Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.map((book) => (
          <div key={book._id} className="bg-white shadow-md p-4 rounded-md">
            <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
            <div className="flex space-x-4">
              <Link to={`bookdetails/${book._id}`}>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
                  View Details
                </button>
              </Link>
              <Link to={`updatebook/${book._id}`}>
                <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 focus:outline-none focus:ring focus:ring-yellow-300">
                  Update
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <RecipeReviewCard />
    </div>
  );
};

export default HomePage;
