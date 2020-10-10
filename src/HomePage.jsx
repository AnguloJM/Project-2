import React from "react";
import { Link } from "react-router-dom";

function HomePage(props) {
  console.log(props);
  return (
    <div>
      <h1>Testing testing</h1>
      <section>
        {props.stateInfo.fields.map((info) => (
          <Link to="/">
            <img src={info.fields[0].Images[0]} alt="random state" />
          </Link>
        ))}
      </section>
    </div>
  );
}

export default HomePage;
