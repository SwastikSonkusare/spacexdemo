import React, { useEffect, useState } from "react";
import axios from "axios";

import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import Pagination from "./components/Pagination/Pagination";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";

const App = () => {
  const [items, setItem] = useState([]);
  const [loading, setLoading] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [capsulesPerPage] = useState(10);
  let currentCapsules;

  // GET All Capsules
  const fetchCapsules = async () => {
    setLoading(true);

    const results = await axios.get("https://api.spacexdata.com/v3/capsules");

    setItem(results?.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCapsules();
  }, []);

  if (items) {
    const indexOfLastCapsule = currentPage * capsulesPerPage;
    const indexOfFirstCapsule = indexOfLastCapsule - capsulesPerPage;
    currentCapsules = items.slice(indexOfFirstCapsule, indexOfLastCapsule);
  }

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Header />
      <SearchBar setItem={setItem} />
      {loading ? <Loader /> : <Card items={currentCapsules} />}
      {loading ? (
        <Loader />
      ) : (
        <Pagination
          capsulesPerPage={capsulesPerPage}
          totalCapsules={items?.length}
          paginate={paginate}
        />
      )}
    </>
  );
};

export default App;
