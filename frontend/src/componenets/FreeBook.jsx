import React, { useEffect, useState } from "react";
import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";

function FreeBook() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        const filterdData = res.data.filter((data) => data.category === "free");
        setBook(filterdData);
        console.log(filterdData);
      } catch (error) {
        console.log("Getting data from backend to frontend error", error);
      }
    };
    getBooks();
  }, []);
  // const filteredFreeData = book.filter((list) => list.category === "free");
  // console.log(filteredFreeData);

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
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white">
      <div>
        <h1 className="font-semibold pb-2 text-xl dark:bg-slate-900 dark:text-white">
          Free Offered Books
        </h1>
        <p className="text-sm py-4 dark:bg-slate-900 dark:text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et eiusmod tempor incididunt ut
          labore e dolore magna iusmod tempor incididunt ut labore et eiusmod
          tempor incididunt ut labore e dolore magna aliqua?
        </p>
      </div>
      <div>
        <div className="slider-container space-x-6">
          <Slider {...settings}>
            {book.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default FreeBook;
