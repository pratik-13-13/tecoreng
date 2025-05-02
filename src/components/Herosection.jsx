import React from 'react';

//import imageforhero from '../assets/Image/infinite.c057ea68.webp';
import '../Css/Hero.css';
import ball from '../../public/images/ball.webp'

const Herosection = () => {
    return (
        <div className="relative  bg-[#112542] text-white flex items-center">
            <div className="container mx-auto py-15 px-24 grid md:grid-cols-2 items-center gap-8">
                {/* Text Content */}
                <div className="space-y-6 text-left">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                        Transfer your enterprise
                        <br />
                        with digital innovation
                    </h1>
                    <p className="text-white  text- ">
                        Your success as a market innovator reflects our strides as a unified
                        partner. Committed to assisting you in attaining excellence through
                        our solutions, we boast a team of adept professionals and dynamic
                        facilitators. Our steadfast commitment to a collaborative strategy,
                        coupled with agile methodologies, propels business expansion. Rely
                        on our strategic insights and development processes, and we will
                        fuel your concepts to manifest as groundbreaking disruptions.
                    </p>
                    <button style={{borderRadius:"10px"}}
          onClick={() => setIsClicked(true)}
          className="flex items-center justify-center px-6 py-2.5 rounded-[25px] bg-gradient-to-r from-[#f47b55] to-[#ff3d00] text-white font-bold text-[29px] leading-[30px] uppercase transform transition-transform duration-300 hover:-translate-y-1.5"
        >
          HIRE NOW  
        </button>
                </div>

                {/* Image Section */}
                <div className="relative flex items-center justify-center w-full max-w-sm mx-auto md:max-w-md lg:max-w-lg">
                    <img
                        src="images/infinity.png"
                        alt="Infinity Logo"
                        className="w-full h-auto object-contain rounded-lg transition-transform duration-300"
                    />
                    <img src={ball}
                     alt="floting ball"
                     className='absolute w-8 h-8 sm:w-11 sm:h-9 floating-ball skew-x-' />
                </div>
            </div>
        </div>
    );
};

export default Herosection;