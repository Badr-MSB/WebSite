import styles from "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import React from 'react'

import './Carousel.css'

const Carousell = ({ images }) => {
    const onClickItemHandler = (index) => {
        console.log(index)
    }
    return (
        <>
            <Carousel
                showThumbs={false}
                showStatus={false}
                showArrows={true}
                autoPlay={true}
                infiniteLoop={true}
                className="crousel"
                onClickItem={(index) => onClickItemHandler(index)}
            >
                {images.map((image, index) => (
                    <div>
                        <img
                            key={`image_${index + 1}`}
                            src={image}
                            className=""
                        />
                    </div>
                ))}
            </Carousel>
        </>
    )
}

export default Carousell