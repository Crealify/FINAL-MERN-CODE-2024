import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../utils/Loader";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState();

  useEffect(() => {
    bookDetails();
  }, []);

  const bookDetails = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/api/v1/book/${id}`);
      const data = await res.data;
      setBook(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white shadow-md p-4 rounded-md">
          {book ? (
            <>
              <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
              <h2 className="text-xl font-semibold mb-2">{book.description}</h2>
            </>
          ) : (
            <>
              <Loader />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
