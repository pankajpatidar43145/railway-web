import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Available.css";

const Available = () => {
  const [seatAvailability, setSeatAvailability] = useState([]);

  useEffect(() => {
    fetchSeatAvailability();
  }, []);

  const fetchSeatAvailability = async () => {
    try {
      // Simulating API call with delay
      setTimeout(() => {
        const data = [
          { ticketClass: "Sleeper (SL)", availableSeats: 100 },
          { ticketClass: "AC 3 Tier (3A)", availableSeats: 100 },
          { ticketClass: "AC 2 Tier (2A)", availableSeats: 100 },
          { ticketClass: "AC First Class (1A)", availableSeats: 100 },
          { ticketClass: "General Coach", availableSeats: 50 },
          { ticketClass: "Second Sitting (2S)", availableSeats: 80 },
        ];
        setSeatAvailability(data);
      }, 0); // Simulate a delay
    } catch (error) {
      console.log(error);
    }
  };

  const renderSeatAvailability = () => {
    const handleBookTrain = (ticketClass) => {
      // Handle the logic for booking the train
      console.log(`Booking train for ${ticketClass}`);
    };

    return (
      <table className="seat-availability-table">
        <thead>
          <tr>
            <th> Ticket Class </th> <th> Available Seats </th>{" "}
            <th> Actions </th>{" "}
          </tr>{" "}
        </thead>{" "}
        <tbody>
          {" "}
          {seatAvailability.map((seat) => (
            <tr key={seat.ticketClass}>
              <td> {seat.ticketClass} </td> <td> {seat.availableSeats} </td>{" "}
              <td>
                <button
                  className="book-train-button"
                  onClick={() => handleBookTrain(seat.ticketClass)}
                >
                  Book Train{" "}
                </button>{" "}
              </td>{" "}
            </tr>
          ))}{" "}
        </tbody>{" "}
      </table>
    );
  };

  return (
    <div className="seat-availability-container">
      <h2> Seat Availability </h2> {renderSeatAvailability()}{" "}
    </div>
  );
};

export default Available;
