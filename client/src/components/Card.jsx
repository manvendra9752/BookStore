import React from "react";

const Card = ({ book }) => {
  // console.log(book);
  return (
    <div className="card m-auto md:w-[90%]  w-[89%] md:shadow-xl mb-10 mt-8 hover:scale-105 hover:transition-all hover:ease-in-out border">
      <figure>
        <img src={book.image} alt="book" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-start">
          {book.name}
          <div className="badge badge-secondary">{book.category}</div>
        </h2>
        <p className="text-start">{book.title} </p>
        <div className="card-actions justify-between">
          <div className="badge badge-outline p-2 mt-4">${book.price}</div>
          <div className="badge badge-outline text-white bg-orange-400 p-3 py-4 hover:bg-orange-600 hover:scale-110 mt-2 duration-200">
            Buy Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
