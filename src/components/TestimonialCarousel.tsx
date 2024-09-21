import React, { useRef, useState } from 'react';
import TestimonialCard from '../components/TestimonialCard.tsx';    
import myPhoto from '../assets/images/myPhoto.png'; 
const testimonials = [
    {
        image: myPhoto,
        name: 'Thomas',
        position: 'Estudante',
        stars: 5,
        testimony: 'Slate helps you see  how many more days you need to work to reach your financial goal for the month and year.',
    },
    {
        image: myPhoto,
        name: 'Thomas',
        position: 'Estudante',
        stars: 5,
        testimony: 'Slate helps you see  how many more days you need to work to reach your financial goal for the month and year..',
    },
    {
        image: myPhoto,
        name: 'Thomas',
        position: 'Estudante',
        stars: 5,
        testimony: 'Slate helps you see how many more days you need to work to reach your financial goal for the month and year.',
    },
];

const TestimonialCarousel: React.FC = () => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startPosition, setStartPosition] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartPosition(e.pageX - carouselRef.current!.offsetLeft);
        setScrollLeft(carouselRef.current!.scrollLeft);
    };

    const handleMouseLeaveOrUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        const x = e.pageX - carouselRef.current!.offsetLeft;
        const walk = (x - startPosition) * 1.5; // Ajusta a velocidade de arraste
        carouselRef.current!.scrollLeft = scrollLeft - walk;
    };

    return (
        <div
            className="testimonial-carousel"
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeaveOrUp}
            onMouseUp={handleMouseLeaveOrUp}
            onMouseMove={handleMouseMove}
        >
            {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
            ))}
        </div>
    );
};

export default TestimonialCarousel;
