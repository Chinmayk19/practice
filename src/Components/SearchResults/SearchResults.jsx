import React from 'react';
import "./SearchResults.css"
import image from "../../assets/plane.png"
import { FaArrowRight } from "react-icons/fa6";

const SearchResults = ({ message, results,origin,destination,departureTimeFrom , departureTimeTo }) => {
  return (
    <div className='result-container'>
      {message && <p>{message}</p>}
      {results.map((result, index) => (
        <div key={index} className="result-card">
          <img src={image} alt="" />
          <div className='result-card-name'>
        <p>{result.partner_program}</p>
          </div>
        <div className='result-card-destination-time'>
          <div className='result-card-destination'>
        <p >{origin}</p>
        <FaArrowRight style={{fontSize:"13px"}}/>
        <p > {destination}</p>
          </div>
          <div>
            <p>{departureTimeFrom} - {departureTimeTo}</p>
          </div>
        </div>
        <div className='result-card-classes'>
        <p><span>{result.min_economy_miles || 'N/A'} </span> {result.min_economy_miles?`+ $${result.min_economy_tax}`:<></>}</p>
        <p className='miles'>Min Economy Miles</p>
        </div>
        <div className='result-card-classes'>
        <p><span>{result.min_business_miles || 'N/A'}</span> {result.min_business_miles? `+ $${result.min_business_tax}`:<></> }</p>
        <p className='miles'>Min Business Miles</p>
        </div>
        <div className='result-card-classes'>
        <p><span>{result.min_first_miles || 'N/A'}</span> {result.min_first_miles?`+ $${result.min_first_tax}`:<></>}</p>
        <p className='miles'>Minimum First Tax</p>
        </div>
      </div>
      ))}
    </div>
  );
};

export default SearchResults;
