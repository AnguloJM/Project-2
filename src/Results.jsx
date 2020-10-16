import Axios from 'axios';
import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom'

function Results(props) {
  const [store, setStore] = useState([]);

  useEffect(() => {
    getResultsList();
  }, []);

  const getResultsList = async () => {
    const airtableURL = `https://corsanywhere.herokuapp.com/api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/ResultsList?maxRecords=6&sort%5B0%5D%5Bfield%5D=CreatedAt&sort%5B0%5D%5Bdirection%5D=desc`;
    const response = await Axios.get(airtableURL, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
      }
    });
    const sort = response.data.records.sort((a,b) => b.fields.Likes - a.fields.Likes)
    setStore(sort[0])
  };

  const targetLocation = props.stateInfo.map((info) => info.fields)
  console.log(targetLocation);

  const grabImage = targetLocation.find((loca) => (
    loca.Locations === (store.fields && store.fields.Location)
  ));

  return (
    <div>
      <Link to="/" ><button type="submit" >Back to Home</button></Link>
      <h1>Your next destiniation is:</h1>
      <div>
        {store.fields &&
          <div>
          <p>{store.fields.Location}</p>
          <p>{store.fields.Likes}</p>
          {grabImage.Images.map((img) => (
            <img src={img.url}/>
          ))}
        </div>
        }
      </div>
    </div>
  )
}

export default Results;