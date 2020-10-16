import React from "react";
import { Link } from "react-router-dom";

function HomePage(props) {
  return (
    <div>
      <Link to="/CatalogOptions">
        <button type="submit" id="begin-button">Begin</button>
      </Link>
      <div id="landingMessage">
        <p>
          Want to travel nationwide? Not sure where to go? Let us choose for you. Click begin to discover your next destination.
        </p>
      </div>
      <section className="homeImages">
        {props.stateInfo.map((info) => (
          <Link to="/">
            <img src={info.fields.Images[0].url} alt="random state" />
          </Link>
        ))}
      </section>
    </div>
  );
}

export default HomePage;
