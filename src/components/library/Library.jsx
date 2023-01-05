import React from "react";
import useChillHop from "../../API/useChillHop";
import TrackItem from "./TrackItem";

const Library = () => {
  const chillHop = useChillHop();
  return (
    <>
      Library
      <ul>
        {chillHop.map((c) => (
          <TrackItem key={c.id} name={c.name} />
        ))}
      </ul>
    </>
  );
};

export default Library;
