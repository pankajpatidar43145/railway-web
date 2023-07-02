// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import "./showtrain.css";

// const ShowTrain = () => {
//   const location = useLocation();
//   const [trains, setTrains] = useState([]);
//   const from = new URLSearchParams(location.search).get("from");
//   const to = new URLSearchParams(location.search).get("to");
//   const date = new URLSearchParams(location.search).get("date");

//   useEffect(() => {
//     fetchTrains();
//   }, []);

//   const fetchTrains = () => {
//     // Simulating API call with delay
//     setTimeout(() => {
//       const data = [
//         {
//           trainNumber: "1234",
//           name: "Indore-Mumbai Express",
//           from: "Indore",
//           to: "Mumbai",
//           date: "2023-07-03",
//           departure: "08:00 AM",
//           arrival: "03:30 PM",
//         },
//         {
//           trainNumber: "5678",
//           name: "Mumbai-Indore Express",
//           from: "Mumbai",
//           to: "Indore",
//           date: "2023-07-03",
//           departure: "10:30 AM",
//           arrival: "06:45 PM",
//         },
//       ];
//       setTrains(data);
//     }, 0); // Simulate a 2-second delay
//   };

//   const renderTrains = () => {
//     const filteredTrains = trains.filter(
//       (train) =>
//         train.from.toLowerCase() === from.toLowerCase() &&
//         train.to.toLowerCase() === to.toLowerCase() &&
//         train.date === date
//     );

//     if (filteredTrains.length === 0) {
//       return (
//         <p>
//           Sorry, no direct trains available for the selected route and date.{" "}
//         </p>
//       );
//     }

//     return (
//       <table className="showtrain-table">
//         <thead>
//           <tr>
//             <th className="showtrain-th"> Train Number </th>{" "}
//             <th className="showtrain-th"> Train Name </th>{" "}
//             <th className="showtrain-th"> Departure Time </th>{" "}
//             <th className="showtrain-th"> Arrival Time </th>{" "}
//           </tr>{" "}
//         </thead>{" "}
//         <tbody>
//           {" "}
//           {filteredTrains.map((train) => (
//             <tr key={train.trainNumber}>
//               <td className="showtrain-td"> {train.trainNumber} </td>{" "}
//               <td className="showtrain-td"> {train.name} </td>{" "}
//               <td className="showtrain-td"> {train.departure} </td>{" "}
//               <td className="showtrain-td"> {train.arrival} </td>{" "}
//               <td className="showtrain-td">
//                 <button className="book-ticket-button"> Book Ticket </button>{" "}
//               </td>{" "}
//             </tr>
//           ))}{" "}
//         </tbody>{" "}
//       </table>
//     );
//   };

//   return (
//     <div className="ex-showtrain-container showtrain-container">
//       <h2 className="ex-showtrain-h2"> Available Trains </h2>{" "}
//       <div className="ex-showtrain-details">
//         <h3 className="ex-showtrain-h3"> From: {from} </h3>{" "}
//         <h3 className="ex-showtrain-h3"> To: {to} </h3>{" "}
//         <h3 className="ex-showtrain-h3"> Date: {date} </h3>{" "}
//       </div>{" "}
//       {renderTrains()}{" "}
//     </div>
//   );
// };

// export default ShowTrain;
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./showtrain.css";

const ShowTrain = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [trains, setTrains] = useState([]);
  const from = new URLSearchParams(location.search).get("from");
  const to = new URLSearchParams(location.search).get("to");
  const date = new URLSearchParams(location.search).get("date");

  useEffect(() => {
    fetchTrains();
  }, []);

  const fetchTrains = () => {
    // Simulating API call with delay
    setTimeout(() => {
      const data = [
        {
          trainNumber: "1234",
          name: "Indore-Mumbai Express",
          from: "Indore",
          to: "Mumbai",
          date: "2023-07-03",
          departure: "08:00 AM",
          arrival: "03:30 PM",
        },
        {
          trainNumber: "5678",
          name: "Mumbai-Indore Express",
          from: "Mumbai",
          to: "Indore",
          date: "2023-07-03",
          departure: "10:30 AM",
          arrival: "06:45 PM",
        },
      ];
      setTrains(data);
    }, 0); // Simulate a 2-second delay
  };

  const renderTrains = () => {
    const filteredTrains = trains.filter(
      (train) =>
        train.from.toLowerCase() === from.toLowerCase() &&
        train.to.toLowerCase() === to.toLowerCase() &&
        train.date === date
    );

    if (filteredTrains.length === 0) {
      return (
        <p>
          Sorry, no direct trains available for the selected route and date.{" "}
        </p>
      );
    }

    const navigateToAvailable = (train) => {
      // Redirect to the "Available" page
      // Pass the train data in the state object
      navigate("/available", { state: { train } });
    };

    return (
      <table className="showtrain-table">
        <thead>
          <tr>
            <th className="showtrain-th"> Train Number </th>{" "}
            <th className="showtrain-th"> Train Name </th>{" "}
            <th className="showtrain-th"> Departure Time </th>{" "}
            <th className="showtrain-th"> Arrival Time </th>{" "}
          </tr>{" "}
        </thead>{" "}
        <tbody>
          {" "}
          {filteredTrains.map((train) => (
            <tr key={train.trainNumber}>
              <td className="showtrain-td"> {train.trainNumber} </td>{" "}
              <td className="showtrain-td"> {train.name} </td>{" "}
              <td className="showtrain-td"> {train.departure} </td>{" "}
              <td className="showtrain-td"> {train.arrival} </td>{" "}
              <td className="showtrain-td">
                <button
                  className="book-ticket-button"
                  onClick={() => navigateToAvailable(train)}
                >
                  Book Ticket{" "}
                </button>{" "}
              </td>{" "}
            </tr>
          ))}{" "}
        </tbody>{" "}
      </table>
    );
  };

  return (
    <div className="ex-showtrain-container showtrain-container">
      <h2 className="ex-showtrain-h"> Available Trains </h2> {renderTrains()}{" "}
    </div>
  );
};

export default ShowTrain;
