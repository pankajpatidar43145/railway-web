import React, { useState } from "react";
import "./Home.css";

const HomePage = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");

  const handleFromChange = (e) => {
    setFrom(e.target.value);
  };

  const handleToChange = (e) => {
    setTo(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleSearchTrains = () => {
    // Perform the search logic here
    console.log("Searching for trains...");
    console.log("From:", from);
    console.log("To:", to);
    console.log("Date:", date);
  };

  return (
    <div className="home-class">
      <h2> IRCTC - Book Train Tickets </h2>{" "}
      <div>
        <label> From: </label>{" "}
        <input type="text" value={from} onChange={handleFromChange} />{" "}
      </div>{" "}
      <div>
        <label> To: </label>{" "}
        <input type="text" value={to} onChange={handleToChange} />{" "}
      </div>{" "}
      <div>
        <label> Date: </label>{" "}
        <input type="date" value={date} onChange={handleDateChange} />{" "}
      </div>{" "}
      <button onClick={handleSearchTrains}> Search Trains </button>{" "}
    </div>
  );
};

export default HomePage;
