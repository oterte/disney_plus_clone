import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import instance from "../../api/axios";
import "./SearchPage.css"
const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
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

  if (searchResults.length > 0) {
    return (
      <section className="search-container">
        {searchResults.map((item) => {
          if (item.backdrop_path !== null && item.media_type !== "person") {
            const movieImageUrl =
              "https://image.tmdb.org/t/p/w500" + item.backdrop_path;
            return (
              <div className="movie" key={item.id}>
                <div
                  className="movie__column-poster"
                  onClick={() => {
                    navigate(`/${item.id}`);
                  }}
                >
                  <img
                    src={movieImageUrl}
                    alt="movie"
                    className="movie__poster"
                  />
                </div>
              </div>
            );
          }
        })}
      </section>
    );
  } else {
    return (
      <section className="no-results">
        <div className="no-results__text">
          <p>찾고자하는 검색어 "{searchTerm}" 에 맞는 영화가 없습니다.</p>
        </div>
      </section>
    );
  }
};

export default SearchPage;
