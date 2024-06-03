import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Card from "./Card";
import { Link } from "react-router-dom";
import axios from "axios";

const Courses = () => {
  const [book, setBook] = useState([]);
  const getBook = async () => {
    try {
      const res = await axios.get("http://localhost:8080/book");
      setBook(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBook();
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen md:max-w-screen-2xl mx-auto container md:p-28 p-10 pt-28 bg-white text-black dark:bg-slate-900 dark:text-white">
        <div className="">
          <h1 className="text-xl md:text-2xl text-center font-bold">
            We're delighted to have you{" "}
            <span className="text-pink-700">Here!:)</span>
          </h1>
          <p className="mt-10">
            The purchase of a book is not merely a transaction, but a gateway to
            adventure and enlightenment. With each selection, readers embark on
            a journey of discovery, investing in the wealth of ideas and
            emotions contained within. Books serve as windows into diverse
            perspectives, fostering empathy and understanding. They support a
            thriving literary ecosystem, sustaining authors, publishers, and
            bookstores. Whether purchased from a local shop or an online
            retailer, each book becomes a cherished companion, offering solace,
            wisdom, and inspiration. In a world filled with distractions, books
            remain steadfast allies, reminding us of the enduring power of the
            written word.
          </p>
          <Link to="/" className="flex items-center">
            <button className="mx-auto  mt-6 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-700 duration-200">
              Back
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4">
          {book.map((book) => (
            <Card book={book} key={book._id} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Courses;
