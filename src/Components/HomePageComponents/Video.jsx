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
    <section className="w-[1400px] h-[650px] relative group container !-mt-40">
      <video
        ref={videoRef}
        className="w-full h-full object-cover rounded-2xl"
        src={video}
      ></video>

      {/* play button */}
      <div
        onClick={handlePlay}
        className={`size-20 grid place-items-center transition-all duration-700 items-center justify-center bg-primary rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 bg-primary-blue -translate-y-1/2 cursor-pointer ${
          !isPlaying ? "flex" : "hidden"
        }`}
      >
        <PlayButtonSvg />
      </div>

      {/* pause button */}
      <div
        onClick={handlePause}
        className={`size-16 opacity-0 group-hover:opacity-100 transition-all duration-700  items-center justify-center bg-primary rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer   ${
          isPlaying ? "flex" : "hidden"
        } `}
      >
        <PauseButtonSvg />
      </div>
    </section>
  );
};

export default Video;
