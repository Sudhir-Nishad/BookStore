import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Course from "../components/Course";
import Loader from "../components/Loader";

export default function Courses() {
  const [isLoading, setIsLoading] = useState(true);

  // Loader--------------------------------------

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
      {isLoading ? <Loader /> : <Course />}
      <Footer />
    </>
  );
}
