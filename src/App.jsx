import { useEffect, useRef } from "react";
import "./App.css";

const zeroPad = (num, places) => String(num).padStart(places, "0");

const VIDEOS = 9;
const VIDEO_SOURCES = [...Array(VIDEOS).keys()].map((k) => `${zeroPad(k + 1, 2)}.mp4`);


function App() {
  const videoRefs = useRef([]);
  const rafId = useRef(null);

  useEffect(() => {
    const playRandomVideos = () => {
      videoRefs.current.forEach((video) => video.pause());

      const numPlaying = Math.floor(Math.random() * VIDEOS) + 1;
      const shuffled = [...Array(VIDEOS).keys()].sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, numPlaying);

      selected.forEach((index) => {
        const video = videoRefs.current[index];

        if (video) {
          video.src = VIDEO_SOURCES[Math.floor(Math.random() * VIDEO_SOURCES.length)];
          video.load();
          video.currentTime = 0;
          video.play();
        }
      });

      const nextDelay = Math.random() * 2000 + 1000;
      rafId.current = setTimeout(() => requestAnimationFrame(playRandomVideos), nextDelay);
    };

    rafId.current = requestAnimationFrame(playRandomVideos);

    return () => clearTimeout(rafId.current);
  }, []);

  return (
    <main className="container">
      {VIDEO_SOURCES.map((name, i) => (
        <video
          ref={(el) => (videoRefs.current[i] = el)}
          className="video"
          key={`video-${i}`}
          src={name}
          loop
          muted
        />
      ))}
      <img className="frame" src="/tv.png" alt="" />
    </main>
  );
}

export default App;