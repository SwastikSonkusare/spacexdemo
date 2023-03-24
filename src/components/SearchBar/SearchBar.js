import React, { useState, useEffect } from "react";
import axios from "axios";

import "./SearchBar.css";

const SearchBar = ({ setItem }) => {
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const [originalLaunch, setOriginalLaunch] = useState("");

  // GET Capsules based on optional query parameter
  useEffect(() => {
    const fetchData = async () => {
      const query = `?${type ? `type=${type}&` : ""}${
        status ? `status=${status}&` : ""
      }${originalLaunch ? `original_launch=${originalLaunch}` : ""}`;
      const response = await axios.get(
        `https://api.spacexdata.com/v3/capsules${query}`
      );
      setItem(response.data);
    };
    fetchData();
  }, [type, status, originalLaunch]);

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleOriginalLaunchChange = (event) => {
    setOriginalLaunch(event.target.value);
  };

  return (
    <div className="box">
      <label htmlFor="type">Type:</label>
      <select id="type" value={type} onChange={handleTypeChange}>
        <option value="">All</option>
        <option value="Dragon 1.1">Dragon 1.1</option>
        <option value="Dragon 2.0">Dragon 2.0</option>
      </select>

      <label htmlFor="status">Status:</label>
      <select id="status" value={status} onChange={handleStatusChange}>
        <option value="">All</option>
        <option value="active">Active</option>
        <option value="retired">Retired</option>
        <option value="unknown">Unknown</option>
      </select>

      <label htmlFor="originalLaunch">Original Launch:</label>
      <input
        id="originalLaunch"
        type="text"
        value={originalLaunch}
        onChange={handleOriginalLaunchChange}
      />
    </div>
  );
};

export default SearchBar;
