import { useState } from "react";

function Carousel({ items }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imageIndex, setImageIndex] = useState(0);     // Image

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        setImageIndex(0);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? items.length - 1 : prevIndex - 1);
        setImageIndex(0);
    };

    const { title, desc, details, image } = items[currentIndex];
    const currentImage = image[imageIndex];

    return (
        <section className="carousel">
            <article className="carousel-content">
                <h2>{title}</h2>
                <p>{desc}</p>
            </article>
            <figure className="carousel-image">
                <img src={currentImage} alt={title} />
                <div className="dot-indicators">
                    {image.map((_, idx) => (
                        <span
                        key={idx}
                        onClick={() => setImageIndex(idx)}
                        className={`dot ${idx === imageIndex ? 'active' : ''}`}
                        />
                    ))}
                </div>
                <div className="carousel-controls">
                    <button onClick={prevSlide}>&lt;</button>
                    <button onClick={nextSlide}>&gt;</button>
                </div>
            </figure>
            <aside className="carousel-otherdetails">
                <h3>Características Principales</h3>
                <ul>
                    {details.map((item, index) => (
                    <li key={index}>{item}</li>
                    ))}
                </ul>
            </aside>
            <div className="carousel-controls-bottom">
                <button onClick={prevSlide}>&lt;</button>
                <button onClick={nextSlide}>&gt;</button>
            </div>
        </section>
    );
}

export default Carousel;