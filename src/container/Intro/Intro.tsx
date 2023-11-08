import React, { useState } from 'react';
import { BsPauseFill, BsPlayFill } from 'react-icons/bs';
import { meal } from '../../constants';
import './Intro.scss';

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = React.useRef<HTMLVideoElement>(null);

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    if (playVideo) {
      vidRef.current?.pause();
    } else {
      vidRef.current?.play();
    }
  };

  return (
    <section className="app__video">
      <video src={meal} ref={vidRef} loop controls={false} muted></video>
      <div className="app__video-overlay">
        <div className="app__video-overlay_circle" onClick={handleVideo}>
          {playVideo ? (
            <BsPauseFill fontSize={30} />
          ) : (
            <BsPlayFill fontSize={30} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Intro;
