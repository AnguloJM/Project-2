import React, { useState } from "react";
import { Link } from "react-router-dom";
import LikeButton from './LikeButton';
import VentureItem from './VentureItem';

function CatalogOptions(props) {

  const [nextPage, setnextPage] = useState(0);
  const [numLike, setNumLike] = useState(0);
  const [amountLikes, setAmountLikes] = useState(0);

  let stateArr = [
    "Texas",
    "California",
    "Arizona",
    "Florida",
    "New York",
    "Colorado",
  ];

  const handleNextPage = () => {
    setnextPage(nextPage => nextPage + 1)
    // setAmountLikes(nextPage)
    setNumLike(0)
  }

  return (
    <div>
      <Link to="/" id="backHome">
        <button>Back to Home</button>
      </Link>
      {nextPage > 5 ? ("") : (<button onClick={handleNextPage}>Next</button>)}
      <Link to="/Results" id="viewResults">
        <button type="submit">View Results</button>
      </Link>
      <p>hello</p>
      <section id="places">
        {nextPage > 5 ? (<h1>Thats All of It</h1>) : (props.stateInfo.map((info) => (
          <>
            {info.fields.Images.map((image) =>
              info.fields.Locations === stateArr[nextPage] ? <VentureItem img={image} numLike={numLike} setNumLike={setNumLike}/> : ("")
              )}
          </>
          ))
        )}
      </section>
    </div>
  );
}

export default CatalogOptions;
