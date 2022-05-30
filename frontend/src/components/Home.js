import React from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import "./App.css";
const HomePage = () => {
  return (
    <Fragment>
      <div className="home-style">
        <h1 className="heading">AdmitCard Home Page</h1>
        <br />
        <ul>
          <li>
            <Link
              to="/UserForm"
              className="li-style"
              style={{ textDecoration: "none" }}
            >
              User Form
            </Link>
          </li>
          <li>
            <Link
              to="/SearchUser"
              className="li-style"
              style={{ textDecoration: "none" }}
            >
              Search
            </Link>
          </li>
        </ul>
        <div className="info" style={{ width: "30rem" }}>
          <ul>
            <li className="list-group-item bb">Name: Ravi Pathak</li>
            <li className="list-group-item bb">
              University: Lovely Professional University
            </li>
            <li className="list-group-item bb">Contact Details: 9618840603 </li>
            <li className="list-group-item bb">
              Email: ravipathak934@gmail.com
            </li>
            <li className="list-group-item bb">
              Linkedln :{" "}
              <a
                href="https://www.linkedin.com/in/ravi-pathak-26aba9192/"
                target={"_blank"}
                rel={"noreferrer"}
              >
                Ravi Pathak
              </a>{" "}
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};
export default HomePage;
