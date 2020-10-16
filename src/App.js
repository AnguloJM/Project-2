import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import HomePage from "./HomePage";
import CatalogOptions from './CatalogOptions';
import Results from './Results';
import "./App.css";

function App() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const getDestinations = async () => {
      const airtableURL = `https://corsanywhere.herokuapp.com/api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/Destinations`;
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      setDestinations(response.data.records);
    };
    getDestinations();
  }, []);

  return (
    <div className="App">
      <header id="Logo">
        <h1>Venture Roulette</h1>
      </header>
      <section>
        <Route exact path="/">
          <HomePage stateInfo={destinations} />
        </Route>  
        <Route exact path="/CatalogOptions">
          <CatalogOptions stateInfo={destinations}/>
        </Route>
        <Route exact path="/Results">
          <Results stateInfo={destinations}/>
        </Route>
      </section>
      <footer>
        <div className="bottom-logo">
          <h3>Venture</h3>
          <p>Find your next destination is just one click away</p>
        </div>
      <div class="contact-info">
          <p id="github">
            <a href="https://github.com/AnguloJM" target="_blank" rel="noopener noreferrer"> <i class="fa fa-github" aria-hidden="true"
              ></i></a>
          </p>
          <p id="linkedin">
            <a href="https://www.linkedin.com/in/jairo-angulo-232370139?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B1kILNLrSQROsAnlWPqRP9w%3D%3D"
            target="_blank" rel="noopener noreferrer"><i class="fa fa-linkedin-square" aria-hidden="true"></i><p id ="goaway2">click here</p></a>
          </p>
      </div>
      </footer>
    </div>
  );
}

export default App;
