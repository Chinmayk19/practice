import React, { useState } from "react";
import "./Home.css";
import SearchForm from "../Components/SearchForm/SearchForm";
import SearchResults from "../Components/SearchResults/SearchResults";
import Heading from "../Components/Heading/Heading";

function Home() {
  const origins = ["JFK", "DEL", "SYD", "BOM", "BNE", "BLR"];
  const destinations = ["JFK", "DEL", "SYD", "LHR", "CDG", "DOH", "SIN"];
  const departureTimeFrom= "2024-07-09T00:00:00Z";
  const departureTimeTo="2024-10-07T00:00:00Z";
  const cabins = ["Economy", "Business", "First"];
  const [origin, setOrigin] = useState("JFK");
  const [destination, setDestination] = useState("DEL");
  const [cabinSelection, setCabinSelection] = useState("Economy");
  const [results, setResults] = useState([]);
  const [message, setMessage] = useState("");

  const handleSearch = async () => {
    const response = await fetch("https://cardgpt.in/apitest", {
      method: "POST",
      headers: {
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.9,hi;q=0.8",
        "cache-control": "no-cache",
        "content-type": "application/json",
        "user-agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
      },
      body: JSON.stringify({
        origin: origin,
        destination: destination,
        cabinSelection: cabinSelection,
        partnerPrograms: [
          "Air Canada",
          "United Airlines",
          "KLM",
          "Qantas",
          "American Airlines",
          "Etihad Airways",
          "Alaska Airlines",
          "Qatar Airways",
          "LifeMiles",
        ],
        stops: 2,
        departureTimeFrom:departureTimeFrom,
        departureTimeTo:departureTimeTo ,
        isOldData: false,
        limit: 302,
        offset: 0,
        date: "2024-07-09T12:00:17.796Z",
      }),
    });

    const data = await response.json();
    if (data && data.data && data.data.length > 0) {
      setResults(data.data);
      setMessage("");
    } else {
      setResults([]);
      setMessage("Try another search route.");
    }
  };

  return (
    <div className="App">
      <Heading />
      <SearchForm
        origins={origins}
        destinations={destinations}
        cabins={cabins}
        origin={origin}
        setOrigin={setOrigin}
        destination={destination}
        setDestination={setDestination}
        cabinSelection={cabinSelection}
        setCabinSelection={setCabinSelection}
        handleSearch={handleSearch}
      />
      <SearchResults message={message} results={results} origin={origin} destination={destination} departureTimeFrom={departureTimeFrom.slice(0,10)} departureTimeTo={departureTimeTo.slice(0,10)} />
    </div>
  );
}

export default Home;
