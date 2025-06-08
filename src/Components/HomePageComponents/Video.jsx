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
    <section className="max-w-[1400px] mx-auto h-[650px] relative group !-mt-40 grid place-items-center">
      <div className="container">
        <div className="px-5 2xl:0">
          <video
            data-aos="fade-up"
            data-aos-delay="1000"
            ref={videoRef}
            className="w-full h-full object-cover rounded-2xl"
            src={video}
          ></video>

          {/* play button */}
          <div
            onClick={handlePlay}
            className={`size-16 xl:size-20 grid place-items-center transition-all duration-700 items-center justify-center bg-primary rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-blue cursor-pointer ${
              !isPlaying ? "flex" : "hidden"
            }`}
          >
            <PlayButtonSvg />
          </div>

          {/* pause button */}
          <div
            onClick={handlePause}
            className={`size-16 opacity-0 group-hover:opacity-100 transition-all duration-700  items-center justify-center bg-primary rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer  ${
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
