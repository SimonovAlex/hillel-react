import { useState } from "react";

const useListController = () => {
    const [current, setCurrent] = useState(0);

    const nextTrack = () => {}
    const prewTrack = () => {}
    const setTrackByID = (id) => {}


    return {
        nextTrack,prewTrack, current, setTrackByID
    }
}


export default useListController