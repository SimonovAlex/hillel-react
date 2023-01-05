import React from "react";
import {secondToMinutes} from "../../Utils";

const AudioController = ({isPlaing, onToglePlay, duration, currentTime}) => {

    return(
       <>
       <div>
        {secondToMinutes(currentTime)}
        <div></div>
        {secondToMinutes(duration)}
       </div>
        <div>
            <button>
                Prev
            </button>
            <button onClick={onToglePlay}>
                {isPlaing? 'Pause': "Play"}
            </button>
            <button>
                Next
            </button>
        </div>
        </>
    )
}

export default AudioController;