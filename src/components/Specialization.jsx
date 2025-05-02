import React, { useState } from 'react';

const ThreeCardCarousel = () => {
    const [activeCardIndex, setActiveCardIndex] = useState(0);

    const cardsData = [
        {
            image: "/images/mb.png",
            title: "Mobile App Development",
            description: "Tecoreng is the top mobile application development company in India. Our expert team of mobile application developers is capable of creating high-quality mobile apps for multiple platforms like IOS & Android."
        },
        {
            image: "/images/pc.png",
            title: "Web Development",
            description: "Our web team creates high-quality websites as per custom requirements and helps to make your business digital. Tecoreng web experts to continue growing themself to the latest fair with technology such as Laravel, Angular, Node.Js, and so on."
        },
        {
            image: "/images/ui.png",
            title: "UI/UX Graphics & Design",
            description: "Tecoreng is the best UI/UX graphics design agency. We have the capacity to build a smooth and high-quality design with our UI/UX team."
        },
        {
            image: "/images/mk.png",
            title: "Digital Marketing",
            description: "Technical Core Engineers is a Digital organization that incorporates administrations from making your Brand identity through carefully characterizing your ideas and zeroing in on getting your items and administrations to the computerized market."
        },
        {
            image: "/images/iot.png",
            title: "Internet Of Things",
            description: "Web of Things (IoT) application advancement interfaces every physical device with the Internet to enable an exchange of data."
        }
    ];

    const handleCardClick = (position) => {
        if (position === 'left') {
            setActiveCardIndex((prev) => (prev > 0 ? prev - 1 : cardsData.length - 1));
        } else if (position === 'right') {
            setActiveCardIndex((prev) => (prev < cardsData.length - 1 ? prev + 1 : 0));
        }
    };

    const getVisibleCards = () => {
        const prevIndex = (activeCardIndex - 1 + cardsData.length) % cardsData.length;
        const nextIndex = (activeCardIndex + 1) % cardsData.length;
        return [prevIndex, activeCardIndex, nextIndex];
    };

    const getCardPosition = (index) => {
        const visibleCards = getVisibleCards();
        const positionIndex = visibleCards.indexOf(index);

        switch (positionIndex) {
            case 0: return 'left';
            case 1: return 'center';
            case 2: return 'right';
            default: return 'hidden';
        }
    };

    const getCardClasses = (position) => {
        const baseClasses = "absolute transition-all duration-700 ease-in-out transform bg-[#1E2433] rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center text-center space-y-3 bg-white";

        switch (position) {
            case 'center':
                return `${baseClasses} w-[90%] sm:w-[500px] md:w-[600px] h-[300px] sm:h-[350px] md:h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 scale-100 cursor-default`;
            case 'left':
                return `${baseClasses} w-[80%] sm:w-[400px] md:w-[490px] h-[250px] sm:h-[300px] md:h-[320px] top-1/2 left-[15%] -translate-x-1/2 -translate-y-1/2 z-5 scale-75 opacity-30 cursor-pointer`;
            case 'right':
                return `${baseClasses} w-[80%] sm:w-[420px] md:w-[500px] h-[250px] sm:h-[300px] md:h-[320px] top-1/2 right-[15%] translate-x-1/2 -translate-y-1/2 z-5 scale-75 opacity-30 cursor-pointer`;
            default:
                return 'hidden';
        }
    };

    return (
        <div className="min-h-screen bg-[#01132E] flex flex-col items-center justify-center relative overflow-hidden px-4 sm:px-6 py-12">
            {/* Heading Section */}
            <div className="mb-16 w-full max-w-6xl px-4">
                <h2
                    className="pb-6 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
                    style={{
                        fontFamily: "Poppins, sans-serif",
                        textShadow: `
                            rgb(239, 237, 227) -1px -1px 1px,
                            rgb(1, 19, 46) 0px 1px 0px,
                            rgb(1, 19, 46) 0px 2px 0px,
                            rgb(1, 19, 46) 0px 3px 0px,
                            rgb(1, 19, 46) 0px 4px 0px,
                            rgb(1, 19, 46) 0px 5px 0px,
                            rgb(77, 89, 108) 0px 6px 0px,
                            rgba(0, 0, 0, 0.9) 0px 0px 0px,
                            rgba(0, 0, 0, 0.3) 0px 0px 0px,
                            rgba(0, 0, 0, 0.5) 0px 0px 0px,
                            rgba(0, 0, 0, 0.9) 0px 0px 0px
                        `
                    }}
                >
                    Our Specialization
                </h2>
                <p className="text-sm sm:text-base text-white max-w-3xl">
                    We offer a full range of web app development services that make things better for enterprises and companies we work with.
                    Our team of dedicated mobile app developers fulfills your diverse business requirements through a number of services.
                    We specialize in the following services:
                </p>
            </div>

            {/* Carousel Section */}
            <div className="relative w-full max-w-6xl h-[400px]">
                {cardsData.map((card, index) => (
                    getCardPosition(index) !== 'hidden' && (
                        <div
                            key={index}
                            className={getCardClasses(getCardPosition(index))}
                            onClick={() => handleCardClick(getCardPosition(index))}
                        >
                            <img src={card.image} alt={card.title} className="w-24 h-24 object-cover mb-6 rounded-full" />
                            <h2 className="text-black text-2xl font-bold mb-4">{card.title}</h2>
                            <p className="text-black leading-relaxed">{card.description}</p>
                        </div>
                    )
                ))}
            </div>
        </div>
    );
};

export default ThreeCardCarousel;
