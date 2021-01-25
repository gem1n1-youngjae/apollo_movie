import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 380px;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  overflow: hidden;
  border-radius: 7px;
  a {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
    -webkit-transition: 1s;
    -moz-transition: 1s;
    -ms-transition: 1s;
    -o-transition: 1s;
    transition: 1s;
  }
  a:hover img {
    -webkit-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -ms-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);
  }
`;

const Poster = styled.img`
  height: 100%;
  width: 100%;
`;

const Movie = ({ id, bg }) => {
  return (
    <Container>
      <Link to={`/${id}`}>
        <Poster src={bg} />
      </Link>
    </Container>
  );
};

export default Movie;
