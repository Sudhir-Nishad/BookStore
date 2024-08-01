// import React from 'react'
import "./course.css";
// import list from "../../public/list.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
// to connect frontend with backend we will use axios
export default function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  },[]);
  return (
    <>
      <div className="course_container">
        <div className="greeting_msg">
          We are delighted to have you <span>Here ! :)</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          praesentium ea maxime veniam pariatur odio tenetur, aut assumenda
          rerum suscipit, excepturi, illum vel nihil aliquid dignissimos maiores
          ratione laboriosam cum?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Debitis praesentium ea maxime veniam pariatur odio
          tenetur, aut assumenda rerum suscipit, excepturi, illum vel nihil
          aliquid dignissimos maiores ratione laboriosam cum?
        </p>
        <div
          style={{
            alignContent: "center",
            display: "flex",
            justifyContent: "center",
            marginTop: "40px",
          }}
        >
          <Link to="/">
            <button className="back_btn">Back</button>
          </Link>
        </div>
        <div className="card_wrapper">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
