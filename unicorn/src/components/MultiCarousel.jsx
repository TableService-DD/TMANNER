import React from 'react'
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick"

export default function MultiCarousel({ children }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return (
        <Slider {...settings}>
            {children}
        </Slider>)
}
