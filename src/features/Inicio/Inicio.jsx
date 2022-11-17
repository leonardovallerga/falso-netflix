import React from "react";
import Card from "../Card/Card";
import useFetch from "../../commons/services/useFetch";
import { TMDBServices } from "../../commons/services/TMDB_API";

const Inicio = () => {
  const { data, error, isLoading } = useFetch(TMDBServices.getPopularMovies);

  return (
    <>
      {!isLoading &&
        data.map((data_element) => {
          return <Card element={data_element} key={data_element.id} />;
        })}
    </>
  );
};

export default Inicio;
