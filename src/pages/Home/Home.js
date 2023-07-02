// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Home.css";

// const cityList = [
//   { name: "Indore", code: "INDB" },
//   { name: "Mumbai", code: "BCT" },
//   { name: "Delhi", code: "NDLS" },
//   { name: "Bangalore", code: "SBC" },
//   { name: "Chennai", code: "MAS" },
//   // Add more cities to the list
// ];

// const HomePage = () => {
//   const navigate = useNavigate();
//   const [from, setFrom] = useState("");
//   const [to, setTo] = useState("");
//   const [date, setDate] = useState("");
//   const [filteredCityList, setFilteredCityList] = useState([]);
//   const [hideCityList, setHideCityList] = useState(false);

//   const handleFromChange = (e) => {
//     const searchValue = e.target.value;
//     setFrom(searchValue);
//     filterCityList(searchValue);
//   };

//   const handleToChange = (e) => {
//     const searchValue = e.target.value;
//     setTo(searchValue);
//     filterCityList(searchValue);
//   };

//   const handleDateChange = (e) => {
//     setDate(e.target.value);
//   };

//   const handleSearchTrains = () => {
//     console.log("Searching for trains...");
//     console.log("From:", from);
//     console.log("To:", to);
//     console.log("Date:", date);

//     navigate("/showtrain"); // Perform navigation using navigate function
//   };

//   const filterCityList = (searchValue) => {
//     const filteredList = cityList.filter(
//       (city) =>
//         city.name.toLowerCase().includes(searchValue.toLowerCase()) ||
//         city.code.toLowerCase().includes(searchValue.toLowerCase())
//     );
//     setFilteredCityList(filteredList);
//     setHideCityList(false);
//   };

//   const handleCitySelection = (cityName, setterFunc) => {
//     setterFunc(cityName);
//     setFilteredCityList([]);
//     setHideCityList(true);
//   };

//   return (
//     <div className="home-class">
//       <h2> IRCTC - Book Train Tickets </h2>{" "}
//       <div>
//         <label> From: </label>{" "}
//         <input
//           type="text"
//           value={from}
//           onChange={handleFromChange}
//           placeholder="Search City"
//         />{" "}
//         {!hideCityList && (
//           <ul className="city-list">
//             {" "}
//             {filteredCityList.map((city) => (
//               <li
//                 key={city.code}
//                 onClick={() => handleCitySelection(city.name, setFrom)}
//                 className="city-item"
//               >
//                 <span className="city-name"> {city.name} </span>{" "}
//                 <span className="city-code"> {city.code} </span>{" "}
//               </li>
//             ))}{" "}
//           </ul>
//         )}{" "}
//       </div>{" "}
//       <div>
//         <label> To: </label>{" "}
//         <input
//           type="text"
//           value={to}
//           onChange={handleToChange}
//           placeholder="Search City"
//         />{" "}
//         {!hideCityList && (
//           <ul className="city-list">
//             {" "}
//             {filteredCityList.map((city) => (
//               <li
//                 key={city.code}
//                 onClick={() => handleCitySelection(city.name, setTo)}
//                 className="city-item"
//               >
//                 <span className="city-name"> {city.name} </span>{" "}
//                 <span className="city-code"> {city.code} </span>{" "}
//               </li>
//             ))}{" "}
//           </ul>
//         )}{" "}
//       </div>{" "}
//       <div>
//         <label> Date: </label>{" "}
//         <input type="date" value={date} onChange={handleDateChange} />{" "}
//       </div>{" "}
//       <button onClick={handleSearchTrains}> Search Trains </button>{" "}
//     </div>
//   );
// };

// export default HomePage;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const cityList = [
  { name: "Indore", code: "INDB" },
  { name: "Mumbai", code: "BCT" },
  { name: "Delhi", code: "NDLS" },
  { name: "Bangalore", code: "SBC" },
  { name: "Chennai", code: "MAS" },
  // Add more cities to the list
];

const HomePage = () => {
  const navigate = useNavigate();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [filteredCityList, setFilteredCityList] = useState([]);
  const [hideCityList, setHideCityList] = useState(false);

  const handleFromChange = (e) => {
    const searchValue = e.target.value;
    setFrom(searchValue);
    filterCityList(searchValue);
  };

  const handleToChange = (e) => {
    const searchValue = e.target.value;
    setTo(searchValue);
    filterCityList(searchValue);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleSearchTrains = () => {
    console.log("Searching for trains...");
    console.log("From:", from);
    console.log("To:", to);
    console.log("Date:", date);

    navigate(
      `/showtrain?from=${encodeURIComponent(from)}&to=${encodeURIComponent(
        to
      )}&date=${encodeURIComponent(date)}`
    );
  };

  const filterCityList = (searchValue) => {
    const filteredList = cityList.filter(
      (city) =>
        city.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        city.code.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredCityList(filteredList);
    setHideCityList(false);
  };

  const handleCitySelection = (cityName, setterFunc) => {
    setterFunc(cityName);
    setFilteredCityList([]);
    setHideCityList(true);
  };

  return (
    <div className="home-class">
      <h2> IRCTC - Book Train Tickets </h2>{" "}
      <div>
        <label> From: </label>{" "}
        <input
          type="text"
          value={from}
          onChange={handleFromChange}
          placeholder="Search City"
        />{" "}
        {!hideCityList && (
          <ul className="city-list">
            {" "}
            {filteredCityList.map((city) => (
              <li
                key={city.code}
                onClick={() => handleCitySelection(city.name, setFrom)}
                className="city-item"
              >
                <span className="city-name"> {city.name} </span>{" "}
                <span className="city-code"> {city.code} </span>{" "}
              </li>
            ))}{" "}
          </ul>
        )}{" "}
      </div>{" "}
      <div>
        <label> To: </label>{" "}
        <input
          type="text"
          value={to}
          onChange={handleToChange}
          placeholder="Search City"
        />{" "}
        {!hideCityList && (
          <ul className="city-list">
            {" "}
            {filteredCityList.map((city) => (
              <li
                key={city.code}
                onClick={() => handleCitySelection(city.name, setTo)}
                className="city-item"
              >
                <span className="city-name"> {city.name} </span>{" "}
                <span className="city-code"> {city.code} </span>{" "}
              </li>
            ))}{" "}
          </ul>
        )}{" "}
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
