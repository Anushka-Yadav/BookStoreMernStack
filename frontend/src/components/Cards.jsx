import React from 'react';

function Cards({ item }) {
  return (
    <div className='mt-4 my-3 p-3 hover:scale-105 duration-200 '>
      <div className="card bg-base-100 shadow-md dark:bg-slate-800 dark:border dark:text-white" style={{ height: '600px' }}>
        <figure><img src={item.image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.title}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.description}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-secondaryoutline">{item.price}</div>
            <div className="rcursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-orange-500">Buy Now</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
