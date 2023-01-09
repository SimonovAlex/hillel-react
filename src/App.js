import React from "react";
import Library from "./components/library/Library";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import useListController from "./hooks/useListController";
import useChillHop from "./API/useChillHop";
import { AudioListContext } from "./context/AudioListContext";

export default function App() {
  const chillHop = useChillHop();
  const controller = useListController(chillHop);

  return (
    <AudioListContext.Provider value={controller}>
      <Library />
      <AudioPlayer />
    </AudioListContext.Provider>
  );
}
