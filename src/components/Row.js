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
    console.log(request);
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
        breakpoints={{
          1378: {
            slidesPerView: 6,
            slidesPerGroup: 6,
          },
          998: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
          625: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          0: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
      >
        <Content id={id}>
          {/* {movies.map((item) => (
            <SwiperSlide key={item.id}>
              <Wrap>
                <img
                  key={item.id}
                  src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                  alt={item.name}
                  onClick={() => handleClick(item)}
                />
              </Wrap>
            </SwiperSlide>
          ))} */}
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
const Wrap = styled.div`
  width: 95%;
  height: 95%;
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0, 0, 0/69%) 0px 26px 30px -10px,
    rgb(0, 0, 0/73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    width: 100%;
    transition: opacity 500ms ease-in-out;
    z-index: 1;
  }
  &:hover {
    box-shadow: rgb(0 0 0/ 80%) 0px 40px 58px -16px,
      rgb(0 0 0/ 72%) 0px 30px 22px -10px;
    transform: scale(0.98);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
