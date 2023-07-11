import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function MultiCarousel({ children }) {

    const responsive = {
        mobile: {
            breakpoint: { max: 480, min: 0 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <Carousel
            draggable={true}
            showDots={false}
            responsive={responsive}
            autoPlay={true}
            removeArrowOnDeviceType={["mobile"]}
        >
            {children}
        </Carousel>)
}
