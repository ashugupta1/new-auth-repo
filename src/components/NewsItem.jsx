import React from "react";
import './dib.css';

const NewsIcon = ({title, description, src, url}) => {
  return (
      <div className="card bg-dark text-light mb-3 d-inline-block mx-3 mx-3 px-2 py-2 " style={{maxWidth:"345px"}}>
        {src? <img className="card-img-top"  src={src} alt="Card image cap" />:<img src="https://source.unsplash.com/random/200x200?sig=1" className="card-img-top" />
        
        }
       
        <div className="card-body">
          <h5 className="card-title">{title.slice(0,50)}</h5>
          <p className="card-text">
            {description?description.slice(0,120):"this is a rendom text when the description is not"}
          </p>
          <a href={url} className="btn btn-primary" target="_blank">
            Read More
          </a>
        </div>
      </div>
  );
};

export default NewsIcon;
