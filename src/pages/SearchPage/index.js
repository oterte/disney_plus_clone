import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import instance from "../../api/axios";

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  let query = useQuery();
  const searchTerm = query.get("q");

  const fetchSearchMovie = async (searchTerm) => {
    try {
      const request = await instance.get(
        `/search/multi?include_adult=false&query=${searchTerm}`
      );
      setSearchResults(request.data.results);
      console.log("123...", searchResults);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    if (searchTerm) {
      fetchSearchMovie(searchTerm);
    }
  }, [searchTerm]);
  return <div>SearchPage</div>;
};

export default SearchPage;
