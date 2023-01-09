import {createContext} from "react";

export const AudioListContext = createContext({
    nextTrack: () => {},
    prewTrack: () => {},
    current: 0,
    setTrackByID: (id) => {},
    currentId: 0,
});