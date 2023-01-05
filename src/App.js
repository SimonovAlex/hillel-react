import React from "react";
import Library from "./components/library/Library";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import useListController from "./hooks/useListController";

export default function App() {
  const { current, setTrackByID, nextTrack, prewTrack } = useListController();

  return (
    <>
      <Library currentTrack={current} setTrackByID={setTrackByID} />
      <AudioPlayer
        currentTrack={current}
        nextTrack={nextTrack}
        prewTrack={prewTrack}
      />
    </>
  );
}
