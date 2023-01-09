import React, { useEffect, useRef, useState, useContext } from "react";
import useChillHop from "../../API/useChillHop";
import AudioController from "./AudioController";
import { AudioListContext } from "../../context/AudioListContext";

const AudioPlayer = () => {
  const { current: currentIdx, nextTrack } = useContext(AudioListContext);

  const [isPlaing, setIsPlaing] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const current = useChillHop()[currentIdx];
  const AudioRef = useRef(new Audio(current.audio));

  const intervalRef = useRef(null);

  //   const interval = setInterval(() => {
  //     // console.log('interval id ', interval)
  //     setCurrentTime(currentTime + 1);
  //   }, 1000);

  const toggleHandler = () => {
    setIsPlaing(!isPlaing);
  };

  const play = async () => {
    console.log("play");
    await AudioRef.current.play();
    intervalRef.current = setInterval(() => {
      setCurrentTime((c) => c + 1);
    }, 1000);
  };

  const pause = () => {
    console.log("pause");
    AudioRef.current.pause();
    clearInterval(intervalRef.current);
  };

  const handleScrub = (value) => {

    setCurrentTime(value);
    AudioRef.current.currentTime = value;
  }

  useEffect(() => {
    if (isPlaing) {
      play();
    } else {
      pause();
    }
  }, [isPlaing]);

  useEffect(() => {
    if (currentTime >= AudioRef.current.duration) {
      nextTrack();
    }
  }, [currentTime, nextTrack]);

  useEffect(() => {
    console.log('eff current', current);
    setCurrentTime(0);
    if(isPlaing){
      pause();
    }
    AudioRef.current = new Audio(current.audio);
    if(isPlaing){
      play();
    }
  }, [currentIdx]);

  return (
    <>
      <AudioController
        isPlaing={isPlaing}
        duration={AudioRef.current.duration}
        currentTime={currentTime}
        onScrub={handleScrub}
        onToglePlay={toggleHandler}
      />
    </>
  );
};

export default AudioPlayer;
