import React from "react";
import { Link } from "react-router-dom";

function HomePage(props) {
  console.log(props);
  return (
    <div>
      <Link to="/CatalogOptions" className="button"><button type="submit" >Begin</button></Link>
      <section className="homeImages">
        {props.stateInfo.map((info) => (
          <Link to="/">
            <img src={info.fields.Images[0].url} alt="random state" />
            <p>{info.fields.Locations}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}

export default HomePage;
