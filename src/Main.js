import React from 'react'
import Sports from './Sports';
import Sportsdata from './Sportsdata';


function Main() {
    return (
      <>
        <div className="color">
          <h1 style={{color:'gold'}}>
            <u>SOME IMPORTANT SPORTS</u>
          </h1>
          {Sportsdata.map((values) => (
            <div key={values.id} className="container">
              <Sports
                ram={values.title}
                sam={values.imgsrc}
                mam={values.text}
                nam={values.btn}
                id={values.id}
              />
            </div>
          ))}
        </div>
      </>
    );
  }
  
  export default Main;
  