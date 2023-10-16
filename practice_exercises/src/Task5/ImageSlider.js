import React, { useState } from 'react';
import images from './Images';
const ImageSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const goToIndex = (index) => {
    setActiveIndex(index);
    };
    const goToPrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };
    const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
    return (
    <div className="slider">
    <button onClick={goToPrevious}>Previous</button>
    <div className="image-container">
        <img src={images[activeIndex].url} alt={`Image ${activeIndex}`} />
        </div>
        <button onClick={goToNext}>Next</button>
        <div className="options">
        {images.map((image, index) => (
        <div
            key={image.id}
            className={`option ${index === activeIndex ? 'active' : ''}`}
            onClick={() => goToIndex(index)}
            />
        ))}
        </div>
    </div>
);
};
export default ImageSlider;