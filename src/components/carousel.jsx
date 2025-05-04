import { useState } from "react";

function Carousel({ items }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
        );
    };

    const { title, desc, details, image } = items[currentIndex];

    return (
        <section className="carousel">
            <article className="carousel-content">
                <h2>{title}</h2>
                <p>{desc}</p>
            </article>
            <figure className="carousel-image">
                <img src={image} alt={title} />
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