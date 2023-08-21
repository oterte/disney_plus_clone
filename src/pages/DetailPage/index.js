import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import instance from "../../api/axios";

const DetailPage = () => {
  const { movieId } = useParams();

  const [movies, setMovies] = useState();
  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(
        `https://api.themoviedb.org/3/movie/${movieId}`
      );
      setMovies(request.data);
    }
    fetchData();
  }, [movieId]);

  if (!movies) return null;
  return (
    <section>
      <img
        className="modal__poster-img"
        src={`https://image.tmdb.org/t/p/original/${movies.backdrop_path}`}
        alt="img"
      />
    </section>
  );
};

export default DetailPage;
