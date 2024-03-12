"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import scrollImage from "../../../public/images/in-scroll-up.svg"


const ScrollComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setIsVisible(false);
  };


  return (
    <div
      className={`fixed bottom-4 right-6 lg:right-12 cursor-pointer transition ease-in-out transform duration-500 ${isVisible ? '-translate-x-4 lg:t-ranslate-x-6 ' : 'translate-x-20 lg:translate-x-24'
        }`}
      onClick={scrollToTop}
    >
      <Image src={scrollImage} alt="error" className="" />
    </div>
  )
}

export default ScrollComponent
