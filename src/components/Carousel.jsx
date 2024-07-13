import React, { useState } from 'react';
import '../styles/carousel.scss';
import ArrowLeft from './icons/ArrowLeft';
import ArrowRight from './icons/ArrowRight';

function Carousel({ children }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [length] = useState(children?.length || 0);

    function next() {
        if (currentIndex < length - 1) {
            setCurrentIndex((prevState) => prevState + 1);
        } else {
            setCurrentIndex(() => 0);
        }
    }

    function prev() {
        if (currentIndex > 0) {
            setCurrentIndex((prevState) => prevState - 1);
        } else {
            setCurrentIndex(() => length - 1);
        }
    }

    return (
        //If there are children, create carousel.
        children?.length > 0 && (
            <div
                className="carousel-container"
                data-testid="carousel-container"
            >
                <div className="carousel-wrapper">
                    {length > 1 && (
                        <button
                            type="button"
                            onClick={prev}
                            className="left-arrow"
                            data-testid="left-arrow"
                        >
                            <ArrowLeft />
                        </button>
                    )}
                    <div className="carousel-content-wrapper">
                        <div
                            className="carousel-content"
                            data-testid="carousel-content"
                            //I need the current index to work, so I cant put style on scss file
                            style={{
                                transform: `translateX(-${
                                    currentIndex * 100
                                }%)`,
                            }}
                        >
                            {children}
                        </div>
                    </div>
                    {length > 1 && (
                        <button
                            type="button"
                            onClick={next}
                            className="right-arrow"
                            data-testid="right-arrow"
                        >
                            <ArrowRight />
                        </button>
                    )}
                    {length > 1 && (
                        <p className="carousel-count">
                            {currentIndex + 1}/{length}
                        </p>
                    )}
                </div>
            </div>
        )
    );
}

export default Carousel;
