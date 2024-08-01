// import React from 'react'
import './banner.css'
import { IoIosMail } from "react-icons/io";
export default function Banner() {
  return (
    <>
        <div className='banner'>
            <div className="left">
                <h1>Hello, welcome here to learn </h1>
                <h1>something <span>new everyday ! ! ! </span></h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo laboriosam rerum at amet ea, nam repudiandae molestiae quaerat nulla, error architecto voluptates! Omnis veniam fugiat, iusto maxime voluptatem error ducimus!</p>

                <div className='email_section'>
                    <IoIosMail style={{fontSize:"20px" , color:"gray"}}/>
                    <input type="text" placeholder='Email' className='dark:bg-slate-900 dark:text-white'></input>
                </div>
                <button>
                  Get started
                </button>
            </div>
            <div className="right">
              <img src="banners.png" alt="" />
            </div>
        </div>
    </>
  )
}
