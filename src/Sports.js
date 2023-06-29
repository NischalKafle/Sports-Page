import React from 'react';
import { Link } from 'react-router-dom';


function Sports(props) {
  
  
  return (
    <div className="card-container">
      <div className="card my-2">
        <img src={props.sam} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.ram}</h5>
          <p className="card-text">{props.mam}</p>
          <Link to={`/${props.id}`}>
<button className="btn btn-primary" >
            {props.nam}
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sports;


