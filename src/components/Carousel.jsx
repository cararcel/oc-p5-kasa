import React, { useEffect, useState } from 'react';
import '../styles/carousel.scss';
import ArrowLeft from './icons/ArrowLeft';
import ArrowRight from './icons/ArrowRight';

function Carousel({ children }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [length, setLength] = useState(children.length);

    // Set the length to match current children from props
    useEffect(() => {
        setLength(children.length);
    }, [children]);

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
        <div className="carousel-container">
            <div className="carousel-wrapper">
                {length > 1 && (
                    <button type="button" onClick={prev} className="left-arrow">
                        <ArrowLeft />
                    </button>
                )}
                <div className="carousel-content-wrapper">
                    <div
                        className="carousel-content"
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`,
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
    );
}

export default Carousel;
