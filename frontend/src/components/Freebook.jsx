import React from 'react'
import list from '../../public/list.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState,useEffect } from 'react';
import axios from "axios";
import Slider from "react-slick";
import Cards from './Cards';
function Freebook() {
  const [book, setBook] = useState([])
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        const data = res.data.filter((data) => data.category === "free");
        setBook(data)
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  },[])
    
    
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
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-2 '>
         
          <div>
           <h1 className=' text-xl font-semibold bold pb-2'>Free Offered Books</h1>
              <p >
Apologies if it came across that way! Let me rephrase it to better suit your needs:

Free books are like hidden gems waiting to be discovered. They provide a wonderful opportunity to explore new stories and ideas without any cost. </p>
          </div>
         
          <div>
          <div className='mt-10'>
                <div className="slider-container   mb-5">
      <Slider {...settings}>
                          {book.map((item) => (
                              <Cards item={item}  key={item.id}/>
                          ))}
      </Slider>
    </div>
            </div>
          </div> 
    </div>
  )
}

export default Freebook
