import React, { useContext, useState } from "react";
import Login from "./Login";
import { Navigate, useNavigate } from "react-router-dom";  
import { store } from "../App";

const Dashboard = ({ userName }) => {
  const [name]= useContext(store);
  console.log("testing it");
  const [data] = useState([
    {
      id: 1,
      fullName: "Jenny Chan",
      address: "3 waterfoot road",
      phoneNumber: "333-962-7516",
      email: "jenny.chan@email.com",
    },
    {
      id: 2,
      fullName: "Jessica warren",
      address: "4 tall town",
      phoneNumber: "011-211-7516",
      email: "jessica.warren@email.com",
    },
    {
      id: 3,
      fullName: "Tony Frank",
      address: "11 lesly road",
      phoneNumber: "788-962-7516",
      email: "tony.frank@email.com",
    },
    {
      id: 4,
      fullName: "Jeremy Clark",
      address: "333 miltown manor",
      phoneNumber: "011-962-111",
      email: "jeremy.clark@email.com",
    },
    {
      id: 5,
      fullName: "Raymond Edwards",
      address: "99 blue acres",
      phoneNumber: "3231-962-7516",
      email: "raymon.edwards@email.com",
    },
    {
      id: 6,
      fullName: "Jenny Chan",
      address: "3 waterfoot road",
      phoneNumber: "333-962-7516",
      email: "jenny.chan@email.com",
    },
    {
      id: 7,
      fullName: "Jessica warren",
      address: "4 tall town",
      phoneNumber: "011-211-7516",
      email: "jessica.warren@email.com",
    },
    {
      id: 8,
      fullName: "Tony Frank",
      address: "11 lesly road",
      phoneNumber: "788-962-7516",
      email: "tony.frank@email.com",
    },
  ]);

  const navigate = useNavigate();

  const goToBack = () => {
    navigate("/")
  }

  return (
    <div className="container">
      <header>
      <button onClick={goToBack} className="head-btn">Back</button>
        <h1>
         Welcome {name}
        </h1>
      </header>
      <main>
        <table>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((dat) => (
              <tr>
                <td>{dat.fullName}</td>
                <td>{dat.address}</td>
                <td>{dat.phoneNumber}</td>
                <td>{dat.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      <footer>
        <label>Copyright © 2022 The Example Company</label>
	<p>
		<a href="about.html">About</a> -
		<a href="policy.html">Privacy Policy</a> -
		<a href="contact.html">Contact Us</a>
	</p>
      </footer>
    </div>
  );
};

export default Dashboard;
