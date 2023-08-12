import React, { useCallback, useEffect, useState } from "react";
import instance from "../api/axios";
import "./Row.css";
import MovieModal from "./MovieModal";
const Row = ({ title, id, fetchUrl }) => {
  const [movies, setMovies] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelected, setMovieSelected] = useState({});
  console.log(movies);
  // 함수를 메모이제이션 하기 위해 useCallback 사용하기
  // fetchUrl이 바뀔때만 렌더링 시 함수 생성
  const fetchMovieData = useCallback(async () => {
    const request = await instance.get(fetchUrl);
    setMovies(request.data.results);
    return request;
  }, [fetchUrl]);

  const handleClick = (movie) => {
    // 모달 기능 구현 필요
    setModalOpen(true);
    setMovieSelected(movie)
  };
  useEffect(() => {
    fetchMovieData();
  }, [fetchMovieData]);

  return (
    <div>
      <h2>{title}</h2>
      <div className="slider">
        <div className="slider__arrow-left">
          <span
            className="arrow"
            onClick={() => {
              document.getElementById(id).scrollLeft -= window.innerWidth - 80;
            }}
          >
            {"<"}
          </span>
        </div>
        <div id={id} className="row__posters">
          {movies.map((item) => (
            <img
              key={item.id}
              className="row__poster"
              src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
              alt={item.name}
              onClick={() => handleClick(item)}
            />
          ))}
        </div>
        <div className="slider__arrow-right">
          <span
            className="arrow"
            onClick={() => {
              document.getElementById(id).scrollLeft += window.innerWidth - 80;
            }}
          >
            {">"}
          </span>
        </div>
      </div>
      {modalOpen && (
        <MovieModal {...movieSelected} setModalOpen={setModalOpen} />
      )}
    </div>
  );
};

export default Row;
