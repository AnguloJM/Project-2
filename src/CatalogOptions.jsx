import React from 'react';
import {Link} from 'react-router-dom'


function CatalogOptions(props) {
  // console.log(props)
  return (
    <div>
      <button type="submit">Next</button>
      <p>hello</p>
      <section>
        {props.stateInfo.map((info) => (
          <Link to="/CatalogOptions">
            <img src={info.fields.Images[0].url} alt="random state" />
            <img src={info.fields.Images[1].url} alt="random state" />
            <img src={info.fields.Images[2].url} alt="random state" />
            <img src={info.fields.Images[3].url} alt="random state" />
            {console.log(info.fields)}
          </Link>
        ))}
      </section>
    </div>
  )
}

export default CatalogOptions;