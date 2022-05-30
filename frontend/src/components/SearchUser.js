import React, { useState } from "react";
import "./App.css";
import axios from "axios";

const SearchUser = () => {
  const [search, setSearch] = useState("");

  const [user, setUser] = useState({
    name: "",
    email: "",
    contact: "",
    course: "",
    country: "",
    dob: "",
  });

  const handleClick = (e) => {
    e.preventDefault();

    if (search === "") {
      alert("Please enter a Email");
    } else {
      axios.get(`http://localhost:5000/search/${search}`).then((res) => {
        setUser({
          name: res.data.name,
          email: res.data.email,
          contact: res.data.contact,
          course: res.data.course,
          country: res.data.country,
          dob: res.data.dob,
        });
      });

      // console.log(user);

      setSearch("");
    }
  };

  return (
    <div className="form-style">
      <h1>Search User</h1>
      <p>by Email</p>

      <div>
        {/* className="input-group" */}
        <form method="POST">
          <input
            type="search"
            className="form-control size-lesser input-group"
            placeholder="Search"
            name="search"
            value={search}
            aria-label="Search"
            aria-describedby="search-addon"
            autoComplete="off"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>

      <button type="submit" className="btn btn-primary" onClick={handleClick}>
        Search
      </button>

      <div className="card" style={{ width: "30rem", margin: "20px" }}>
        <h2>User Details</h2>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Contact: {user.contact}</p>
        <p>Course: {user.course}</p>
        <p>Country: {user.country}</p>
        <p>DOB: {user.dob}</p>
      </div>
    </div>
  );
};

export default SearchUser;
