import React from "react";
import { useState } from "react";
import "./App.css";
import image1 from "./assets/Respect yourself_, Renegades of Phong.jpeg";
import image2 from "./assets/Pensive girl, Alina Makarenko.png";
import Axios from "axios";
function App() {
  const [bol, setBool] = useState(true);

  // States
  const [userName, setName] = useState("");
  const [userPass, setPass] = useState("");
  const [userEmail, setEmail] = useState("");
  const [mess, setMess] = useState("");

  // Make requests
  const register = async () => {
    await Axios.post("http://localhost:5000/user/register", {
      name: userName,
      email: userEmail,
      password: userPass,
    }).then((response) => {
      console.log(response);
      setMess(response.data);
    });
  };
  const login = () => {
    Axios.post("http://localhost:5000/user/login", {
      email: userEmail,
      password: userPass,
    }).then((response) => {
      console.log(response.data);
      setMess(response.data);
    });
  };

  document.querySelectorAll("input").forEach((el) => {
    el.addEventListener("blur", (event) => {
      if (event.target.value !== "") {
        event.target.nextElementSibling.classList.add("filled");
      } else {
        event.target.nextElementSibling.classList.remove("filled");
      }
    });
  });

  return (
    <div className="scaf">
      <div className="background-img"></div>

      <div className="cont">
        <img
          src={bol ? image1 : image2}
          alt=""
          className="img"
          style={
            bol
              ? { position: "absolute", left: "0" }
              : { position: "absolute", left: "50%" }
          }
        />
        <div className="sign-up">
          <h2>Sign Up</h2>

          <p className="message">{mess}</p>

          <div className="form">
            <form onSubmit={register}>
              <div className="input-cont">
                <input
                  type="text"
                  placeholder=""
                  id="name"
                  className="input"
                  value={userName}
                  onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="name" className="label">
                  Name
                </label>
                <input
                  type="email"
                  placeholder=""
                  id="email"
                  className="input"
                  value={userEmail}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="email" className="label">
                  Email
                </label>
                <input
                  type="password"
                  placeholder=""
                  id="password"
                  className="input"
                  value={userPass}
                  onChange={(e) => setPass(e.target.value)}
                />
                <label htmlFor="password" className="label">
                  Password
                </label>
              </div>

              <button className="submit btn">Sign Up</button>
            </form>
            <button
              className="switch "
              onClick={() => {
                setBool(!bol);
              }}
            >
              Already have an account!
            </button>
          </div>
        </div>
        <div className="sign-in">
          <h2>Welcome Back!</h2>

          <div className="form">
            <div>
              <p className="l-message">{mess}</p>
              <div className="input-cont">
                <input
                  type="email"
                  placeholder="Email"
                  id="l-email"
                  className="input"
                  value={userEmail}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="l-email" className="label">
                  Email
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  id="l-password"
                  className="input"
                  value={userPass}
                  onChange={(e) => setPass(e.target.value)}
                />
                <label htmlFor="l-password" className="label">
                  Password
                </label>
              </div>

              <button className="submit btn" onClick={login}>
                login
              </button>
            </div>
            <button
              className="switch "
              onClick={() => {
                setBool(!bol);
              }}
            >
              Don't have an account!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
