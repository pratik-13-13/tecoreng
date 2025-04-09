
import React, { useRef, useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

const Video = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className=' bg-[#23385E]'>
      <div className=" flex justify-center -mt-4 items-center min-h-auto py-10  px-4 sm:px-6 lg:px-8 relative">
        <div className="w-full max-w-6xl top-0  sm:mt-9 mb-4 sm:mb-5 relative">
          <video ref={videoRef} className="w-full h-auto rounded-lg shadow-lg" controls>
            <source src="/Tecoreng_previewVideo.mp4" type="video/mp4" />

          </video>

          {/* Play/Pause Button */}
          <button
            onClick={togglePlayPause}
            className="absolute bottom-20 right-5 bg-black/70 text-white p-2 rounded-4xl shadow-md 
             hover:bg-gray-800   transition duration-300 flex items-center justify-center"
          >
            {isPlaying ? <FaPause size={24} /> : <FaPlay size={24} />}
          </button>


        </div>
      </div>
    </div>
  );
};

export default Video;
