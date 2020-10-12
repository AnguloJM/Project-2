import React from 'react';
import {Link} from 'react-router-dom'


function CatalogOptions(props) {

  return (
    <div>
      <Link to="/" id="backHome"><button type="submit" >Back to Home</button></Link>
      <button type="submit">Next</button>
      <Link to="/Results" id="viewResults"><button type="submit" >View Results</button></Link>
      <p>hello</p>
      <section>
        {props.stateInfo.map((info) => (
          <Link to="/CatalogOptions">
            {info.fields.Images.map((image) => (
              <img src={image.url} />
            ))}
          </Link>
        ))}
      </section>
    </div>
  )
}

export default CatalogOptions;