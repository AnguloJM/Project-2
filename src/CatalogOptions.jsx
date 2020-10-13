import React, { useState } from "react";
import { Link } from "react-router-dom";

function CatalogOptions(props) {
  let stateArr = [
    "Texas",
    "California",
    "Arizona",
    "Florida",
    "New York",
    "Colorado",
  ];
  const [count, setCount] = useState(0);

  return (
    <div>
      <Link to="/" id="backHome">
        <button type="submit">Back to Home</button>
      </Link>
      {count > 5 ? ("") : (<button type="submit" onClick={() => setCount(count + 1)}>Next</button>)}
      <Link to="/Results" id="viewResults">
        <button type="submit">View Results</button>
      </Link>
      <p>hello</p>
      <section id="places">
        {count > 5 ? (<h1>Thats All of It</h1>) : (props.stateInfo.map((info) => (
            <Link to="/CatalogOptions">
              {info.fields.Images.map((image) =>
                info.fields.Locations === stateArr[count] ? (<img src={image.url} alt="Somewhere in some state" />) : ("")
              )}
            </Link>
          ))
        )}
      </section>
    </div>
  );
}

export default CatalogOptions;
