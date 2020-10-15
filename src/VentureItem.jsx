import React, { useEffect, useRef, useState } from 'react'
import LikeButton from './LikeButton'

function useDidUpdateEffects(fn, inputs) {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (didMountRef.current) {
      fn()
    } else {
      didMountRef.current = true;
    }
  }, [fn, ...inputs]); 
}

function VentureItem(props) {
  const [isLiked, setIsLiked] = useState(false);

  useDidUpdateEffects(() => {
    if (isLiked) {
      props.setNumLike(props.numLike + 1)
    } else {
      props.setNumLike(props.numLike - 1)
    }
  },[isLiked]) 

  return (
    <div>
      <img src={props.img.url} alt="Somewhere in some state" />{isLiked}
      <LikeButton
        isLiked={isLiked}
        setIsLiked={setIsLiked}
      />
    </div>
  )
}

export default VentureItem;





