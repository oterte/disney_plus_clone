import React, { useState } from "react";
import "./MovieModal.css";

const MovieModal = ({
  backdrop_path,
  title,
  overview,
  name,
  release_date,
  first_air_date,
  vote_average,
  setModalOpen,
}) => {
  const [modalVisibility, setModalVisibility] = useState(true);
  return (
    <div className="presentation" role="presentation">
      <div className="wrapper-modal">
        <span onClick={() => setModalVisibility(false)}>X</span>
        <img
          className="modal__poster-img"
          src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
          alt="modal-img"
        />
        <div className="modal__content">
          <p className="modal__details">
            <span className="modal__user_perc">100% for you</span>{" "}
            {release_date ? release_date : first_air_date}
          </p>
          <h2 className="modal__title">{title ? title : name}</h2>
          <p className="modal__overview">평점: {vote_average}</p>
          <p className="modal__overview">{overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
