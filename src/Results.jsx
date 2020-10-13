import React from 'react';
import {Link} from 'react-router-dom'

function Results() {
  return (
    <div>
      <Link to="/" ><button type="submit" >Back to Home</button></Link>
      <h1>Your next destiniation is:</h1>
    </div>
  )
}

export default Results;