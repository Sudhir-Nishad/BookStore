// import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Freebook from "../components/Freebook";
import Loader from "../components/Loader";
import { useEffect, useState } from "react";
export default function Home() {
  // Loader---------------------------------------

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <Navbar />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Banner />
          <Freebook />
        </>
      )}
      <Footer />
    </div>
  );
}
