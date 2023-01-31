import React, {useMemo, useCallback, useEffect, useState} from "react";

export default function Comp({width, height}) {
    const [a, setA] = useState(0);

    useEffect(() => {
        console.log('useEffect', a);
        setA(10)
    }, [a, setA]) 


    return (<div>
        {console.log('render console.log', a)}
        some text 
    </div>)
}