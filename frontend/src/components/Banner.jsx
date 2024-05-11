import React from 'react'
import banner from '../../public/assets/banner.png'
function Banner() {
  return (
    <div className='max-w-screen-2xl md:flex-row flex-col justify-between container mx-auto md:px-20 px-2 flex'>
      <div className='order-2 md:order-1 w-full md:w-1/2 md:mt-32 mt-12'>
        <div className='space-y-12'>
          <h1 className='font-bold text-4xl'>Hello! Welcome Here to learn something{' '}<span className='text-indigo-500'> new everyday</span>
          </h1>
          <p className='text-xl'> Books are windows into worlds unknown, portals to the past, present, and future, and companions on the journey of life. They come in all shapes, sizes, and genres, offering something for every taste and inclination.  </p>
          <label className="input input-bordered flex items-center gap-2">
  Email
  <input type="text" className="grow" placeholder="Enter your email to Login" />
</label>
        </div>
        <div className='mt-5'>
          <button className="btn btn-outline btn-accent">Explore Now</button>
        </div>
        

          </div>
      <div className='order-1  md:order-2 w-full md:mt-20 mt-5 md:ml-44 md:w-1/2'>
        <img src={banner} className='w-74 h-74'></img>
          </div>
    </div>
  )
}

export default Banner
