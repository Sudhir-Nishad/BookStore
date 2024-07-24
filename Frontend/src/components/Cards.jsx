// import React from 'react'
import './card.css'
export default function Cards({ item }) {
  return (
    <div className="card_container">
      <div className="card bg-base-100 w-95 dark:bg-slate-900 dark:text-white">
        <figure>
          <img
            src={item.image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">${item.price}</div>
            <div className="badge badge-outline buy_btn">Buy Now</div>
          </div>
        </div>
      </div>
    </div>
  );
}
