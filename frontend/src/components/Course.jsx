import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import { Link } from 'react-router-dom';
import axios from "axios";
function Course() {
  const [book, setBook] = useState([])
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data)
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  },[])
  return (
    <div className='flex justify-center '>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-2'>
        <div className='mt-24'>
          <h1 className='text-center text-3xl'>We are Delighted to have you <span className='text-indigo-500'>Here :)</span></h1>
        </div>
        <div>
          <p className='text-center mx-10 mt-5'>Unlock a world of knowledge and inspiration with our curated selection of premium paid books. Dive into captivating stories, explore thought-provoking insights, and expand your horizons with exclusive content available only on our platform. </p>
        </div>
        <div className='flex justify-center mt-5'>
          <Link to={"/"}>
          <button className='rounded-md bg-indigo-500 p-2 px-6 text-black'>Back</button>
          </Link>
        </div>
        <div className='flex-romt-12 grid grid-col-1 md:grid-cols-4'>
          {
            book.map((item) => {
              return <Cards item={item} key={item.id} />;
            })
          }
        </div>
      </div>
    </div>
        );
}

export default Course;
