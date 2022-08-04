import { useState,useEffect } from "react";

const useWindowSize = () => {
    const [windowSize,setWindowSize]=useState({
        width:undefined,
        height:undefined
    });


    useEffect(()=>{

        const handelResize=()=>{
            setWindowSize({
                width:window.innerWidth,
                height:window.innerHeight
            });
        }

        handelResize();
        window.addEventListener('resize',handelResize);
        
        // const cleanUp =()=>{
        //     console.log('resize');
        //     window.removeEventListener('resize',handelResize);
        // }
        // return cleanUp

        // clean up function
        return ()=>window.removeEventListener('resize',handelResize);


    },[])
   
    return windowSize;
}

export default useWindowSize