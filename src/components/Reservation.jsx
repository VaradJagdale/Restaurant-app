import React, { useState } from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Reservation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleReservation = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/v1/reservation/send",
        { firstName, lastName, email, phone, date, time },
        {
          headers: {
            "Content-type": "application/json"
          },
          withCredentials: true
        }
      );
      toast.success(data.message);
      // Reset the form fields
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setDate("");
      setTime("");
      navigate("/success");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="reservation" id="reservation">
      <div className="container">
        <div className="banner">
          <img src="reservation.png" alt="Reservation" />
        </div>
        <div className="banner">
          <div className="reservation_form_box">
            <h1>MAKE A RESERVATION</h1>
            <p>For further questions, please call</p>
            <form onSubmit={handleReservation}>
              <div className="input-row">
                <div className="input-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="input-row">
                <div className="input-group">
                  <label htmlFor="date">Date</label>
                  <input
                    id="date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="time">Time</label>
                  <input
                    id="time"
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="input-row">
                <div className="input-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </div>
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "RESERVE NOW"}
                <span>
                  <HiOutlineArrowNarrowRight />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;


