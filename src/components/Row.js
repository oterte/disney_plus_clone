import React, { useCallback, useEffect, useState } from "react";
import instance from "../api/axios";
import "./Row.css";
import MovieModal from "./MovieModal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { styled } from "styled-components";

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
    setModalOpen(true);
    setMovieSelected(movie);
  };
  useEffect(() => {
    fetchMovieData();
  }, [fetchMovieData]);

  return (
    <Container>
      <h2>{title}</h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        loop={true}
        navigation
        pagination={{ clickable: true }}
      >
        <Content id={id}>
          {movies.map((item) => (
            <SwiperSlide>
              <Wrap>
                <img
                  key={item.id}
                  className="row__poster"
                  src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                  alt={item.name}
                  onClick={() => handleClick(item)}
                />
              </Wrap>
            </SwiperSlide>
          ))}
        </Content>
      </Swiper>
      {modalOpen && (
        <MovieModal {...movieSelected} setModalOpen={setModalOpen} />
      )}
    </Container>
  );
};

export default Row;

const Container = styled.div`
  padding: 0 0 26px;
`;
const Content = styled.div``;
const Wrap = styled.div``;
