import React, { useEffect, useState } from "react";
import Card from "./Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

const FreeBook = () => {
  const [book, setBook] = useState([]);
  const getBook = async () => {
    try {
      const res = await axios.get("http://localhost:8080/book");
      setBook(res.data.filter((data) => data.category === "Free"));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBook();
  }, []);

  // console.log(book);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="max-w-screen-2xl  mx-auto p-7 md:px-14  text-black bg-white dark:bg-slate-900 dark:text-white">
      <h1 className="font-bold text-xl">Free Offered Courses</h1>
      <p>
        Lorem aspsun dolor sit manet , connecto adipicing aldtt . accustaoin
        vertatis altlas pariaater a doljal aeleitjen dalttgend corposi mjmal non
        suvnirpij nohojjsldfoi fijanfj
      </p>
      <div className="text-center dark:bg-slate-900 dark:text-white">
        <Slider {...settings}>
          {book.map((book) => (
            <Card book={book} key={book._id} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FreeBook;
