import React, { useEffect, useRef, useState } from "react";
import useChillHop from "../../API/useChillHop";
import AudioController from "./AudioController";

const AudioPlayer = ({ currentTrack }) => {
  const [isPlaing, setIsPlaing] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const current = useChillHop()[currentTrack];
  const AudioRef = useRef(new Audio(current.audio));


  const intervalRef = useRef(null);

  //   const interval = setInterval(() => {
  //     // console.log('interval id ', interval)
  //     setCurrentTime(currentTime + 1);
  //   }, 1000);

  const toggleHandler = () => {
    setIsPlaing(!isPlaing);
  };

  const play = () => {
    console.log('play')
    AudioRef.current.play();
    intervalRef.current = setInterval(() => {
        console.log('currentTime', currentTime,  intervalRef.current)
        setCurrentTime((c) => c + 1 );
      }, 1000)
  };

  const pause = () => {
    console.log('pause')
    AudioRef.current.pause();
    clearInterval(intervalRef.current)
  };

  useEffect(() => {
    if (isPlaing) {
      play();
    } else {
      pause();
    }
  }, [isPlaing]);

  return (
    <>
      <AudioController
        isPlaing={isPlaing}
        onToglePlay={toggleHandler}
        duration={AudioRef.current.duration}
        currentTime={currentTime}
      />
    </>
  );
};

export default AudioPlayer;
