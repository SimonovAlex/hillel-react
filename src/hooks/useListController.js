import { useState, useMemo } from "react";

const useListController = (list = []) => {
    const [current, setCurrent] = useState(0);

    const nextTrack = () => {
        if(list.length === current + 1){
            setCurrent(0)
        }else{
            setCurrent(current + 1)
        }
    }
    const prewTrack = () => {
        if(current === 0 ){
            setCurrent(list.length - 1)
        }else{
            setCurrent(current - 1)
        }
    }
    const setTrackByID = (id) => {
        const idx = list.findIndex((item) => item.id === id);
        if(idx > -1 ){
            setCurrent(idx);
        }
    }


    const currentId = useMemo(() => list[current].id, [current])


    return {
        nextTrack,prewTrack, current, setTrackByID, currentId
    }
}


export default useListController