import { useEffect, useState } from "react"

export const useTestedHook = (defaultValue) => {
    const [value, setValue] = useState(defaultValue);

    // console.log('hook', value);


    useEffect(() => {
        console.log('useTestedHook', value)
    }, [value])


    
  useEffect(() => {
    fakeApi();
    
  }, [])



    const fakeApi = () => {
        console.log('fakeApi')
        
        
        ///
    }


    return {value, setValue, fakeApi};

}

