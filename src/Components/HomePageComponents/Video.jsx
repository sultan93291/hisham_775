import { useRef, useState } from "react";
import video from "../../assets/short_video.mp4";
import { PauseButtonSvg, PlayButtonSvg } from "../Svg/SvgContainer";

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null); // Create a ref for the video element
  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      videoRef.current.setAttribute("loop", "true"); // Set loop attribute
      videoRef.current.setAttribute("muted", "true"); // Set muted attribute
      videoRef.current.setAttribute("autoplay", "true"); // Set autoplay attribute
    }
    setIsPlaying(true); // Set the state to 'playing'
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.removeAttribute("loop"); // Remove loop attribute
      videoRef.current.removeAttribute("muted"); // Remove muted attribute
      videoRef.current.removeAttribute("autoplay"); // Remove autoplay attribute
    }
    setIsPlaying(false); // Set the state to 'paused'
  };

  return (
    <section className="max-w-[1400px] mx-auto relative group -mt-32 xl:!-mt-40 grid place-items-center">
      <div className="container">
        <div className="md:px-2 lg:px-5 2xl:px-0">
          <video
            data-aos="fade-up"
            data-aos-delay="1000"
            ref={videoRef}
            className="w-full h-[270px] sm:h-[320px] md:h-[380px] lg:h-[500px] xl:h-[650px] object-cover rounded-2xl"
            src={video}
          ></video>

          {/* play button */}
          <div
            onClick={handlePlay}
            className={`size-12 sm:size-16 xl:size-20 grid place-items-center transition-all duration-700 items-center justify-center bg-primary rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-blue cursor-pointer ${
              !isPlaying ? "flex" : "hidden"
            }`}
          >
            <PlayButtonSvg />
          </div>

          {/* pause button */}
          <div
            onClick={handlePause}
            className={`size-12 sm:size-16 opacity-0 group-hover:opacity-100 transition-all duration-700  items-center justify-center bg-primary rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer  ${
              isPlaying ? "flex" : "hidden"
            } `}
          >
            <PauseButtonSvg />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
