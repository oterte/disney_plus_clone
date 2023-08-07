import React, { useEffect, useState } from "react";
import instance from "../api/axios";
import request from "../api/request";
import axios from "axios";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  const fetchData = async () => {
    // 현재 영화 정보 가져오기(여러개)
    const data = await instance.get(request.fetchNowPlaying);
    console.log(data);

    // 여러 영화 중 하나의 id 가져오기
    const movieId =
      data.data.results[Math.floor(Math.random() * data.data.results.length)]
        .id;

    //  특정 영화 상세정보 가져오기
    const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
      params: { append_to_response: "videos" },
    });

    setMovie(movieDetail);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>Banner</div>;
};

export default Banner;
