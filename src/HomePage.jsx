import React from "react";
import { Link } from "react-router-dom";

function HomePage(props) {
  return (
    <div>
      <Link to="/CatalogOptions" className="button"><button type="submit" >Begin</button></Link>
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
