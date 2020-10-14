import React, { useEffect, useState } from "react";
import axios from "axios";
import { link, Route } from "react-router-dom";
import HomePage from "./HomePage";
import CatalogOptions from './CatalogOptions'
import Results from './Results'
import LikeButton from './LikeButton'
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
      // console.log(response.data.records);
    };
    getDestinations();
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Venture</h1>
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
        <Route exact path="/LikeButton">
          <LikeButton stateInfo={destinations}/>
        </Route>
      </section>
      <footer>
        <h3>Venture</h3>
        <p>Find your next destination is just one click away</p>
      </footer>
    </div>
  );
}

export default App;
