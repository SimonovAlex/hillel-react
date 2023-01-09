import React, { useContext } from "react";
import useChillHop from "../../API/useChillHop";
import { AudioListContext } from "../../context/AudioListContext";
import TrackItem from "./TrackItem";

const Library = () => {
  const chillHop = useChillHop();

  const {currentId} = useContext(AudioListContext);

  return (
    <>
      Library
      <ul>
        {chillHop.map((c) => (
          <TrackItem key={c.id} name={c.name} isActive={currentId === c.id} />
        ))}
      </ul>
    </>
  );
};

export default Library;
