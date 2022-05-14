import React, { useRef } from 'react';
import '../styles/TrailerSlide.css';

const TrailerSlide = ({ video }) => {
  const iframeRef = useRef(null);
  return (
    <div className='video-card'>
      <iframe
        width='100%'
        height='100%'
        ref={iframeRef}
        src={`https://youtube.com/embed/${video.key}`}
        title='video'
      ></iframe>
      <h3>{video.name}</h3>
      <p>{video.type}</p>
    </div>
  );
};

export default TrailerSlide;
