import React, { useContext } from "react";
import { AudioListContext } from "../../context/AudioListContext";
import { secondToMinutes } from "../../Utils";

const AudioController = ({ isPlaing, onToglePlay, duration, currentTime, onScrub }) => {
  const { nextTrack, prewTrack } = useContext(AudioListContext);
  console.log("duration", duration);
  return (
    <>
      <div>
        {secondToMinutes(currentTime)}
        <input
          type="range"
          step="1"
          min="0"
          max={isNaN(duration) ? "0" : duration}
          value={currentTime}
        //   onMouseUp={(e) => console.log('mouseUp', e)}
          onChange={(e) => onScrub(e.target.value)}
        />
        {secondToMinutes(duration)}
      </div>
      <div>
        <button onClick={prewTrack}>Prev</button>
        <button onClick={onToglePlay}>{isPlaing ? "Pause" : "Play"}</button>
        <button onClick={nextTrack}>Next</button>
      </div>
    </>
  );
};

export default AudioController;
