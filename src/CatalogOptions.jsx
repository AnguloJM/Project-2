import React, { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import VentureItem from './VentureItem';

function CatalogOptions(props) {

  const [nextPage, setnextPage] = useState(0);
  const [numLike, setNumLike] = useState(0);

  let stateArr = [
    "Texas",
    "California",
    "Arizona",
    "Florida",
    "New York",
    "Colorado",
  ];

  const handlePost = async () => {
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/ResultsList`
    const fields = {
      Likes: numLike,
      Location: stateArr[nextPage],
    };

    await axios.post(airtableURL, { fields }, {
      headers: {

        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
      }
    });
  };

  const handleNextPage = () => {
    handlePost();
    setnextPage(nextPage => nextPage + 1);
    setNumLike(0);
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
      <div>
        <p>
          Give a like to the images that catch your eye. 
        </p>
      </div>
      <section id="places">
        {nextPage > 5 ? (<h1>Click on "View Results" to see what your next destination will be</h1>) : (props.stateInfo.map((info) => (
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