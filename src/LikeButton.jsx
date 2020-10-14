import React,{useState} from 'react';

function LikeButton(props) {
  
  const [count, setCount] = useState(0);
  let totalLikes = 0;
  if (count) {
    totalLikes += count;
    // console.log(count)
    console.log(totalLikes)
  }

  return (
    <div>
      <button id="likeButton" type="submit" onClick={() => setCount(count + 1)}>Like</button>
    </div>
   )
}
 
export default LikeButton;