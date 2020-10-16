import React, { useEffect, useRef, useState } from 'react'
import LikeButton from './LikeButton'

function useDidUpdateEffects(fn, inputs) {
  const didMountRef = useRef(false);
  // used this code from https://stackoverflow.com/questions/53179075/with-useeffect-how-can-i-skip-applying-an-effect-upon-the-initial-render
  useEffect(() => {
    if (didMountRef.current) {
      fn()
    } else {
      didMountRef.current = true;
    }
  }, inputs); // eslint-disable-line 
}

// used code from https://stackoverflow.com/questions/56028365/how-to-increase-decrease-count-on-click-of-same-button-in-js-reactjs
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
    <div className="catalogImage">
      <img src={props.img.url} alt=" "/>{isLiked}
      <LikeButton
        isLiked={isLiked}
        setIsLiked={setIsLiked}
      />
    </div>
  )
}

export default VentureItem;





