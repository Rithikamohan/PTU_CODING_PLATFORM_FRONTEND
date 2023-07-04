import React,{useEffect, useState} from 'react'
import ReactConfetti from 'react-confetti'
const Success = () => {

const [windowDimension, setDimension] = useState({width: window.innerWidth,height: window.innerHeight });

const detectSize =() =>{
    setDimension({width: window.innerWidth,height: window.innerHeight });
}
useEffect(() =>{
    window.addEventListener('resize', detectSize);
    return () =>{
        window.removeEventListener('resize', detectSize);
    }
}, [windowDimension]);
      return (
    <div style={{backgroundColor: "black"}}>
        <ReactConfetti
        width={windowDimension.width}
        height={windowDimension.height}
tweenDuration={1000}
        />
        </div>

  )
}

export default Success