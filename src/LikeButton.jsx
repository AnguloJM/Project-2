import React from 'react';

function LikeButton(props) {

  const handleSubmit = () => {
    props.setIsLiked(!props.isLiked);
  }

  return (
    <div>
      <button id="likeButton" onClick={handleSubmit}>Like</button>
    </div>
  )
}
 
export default LikeButton;