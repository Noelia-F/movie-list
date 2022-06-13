import React from 'react';
import FilmList from '../../components/filmList/FilmList';
import { useMovies } from '../../hooks/useMovies';
import './SearchResults.css';

export default function SearchResults({params}) {
  const {keyword} = params;
  const { loading, movies } = useMovies({keyword});

  const nameMovie = keyword.replace(/%20+/g, ' ');

  if(loading) {
    return <i>Loading...</i>
  }

  return (
    <React.Fragment>
      <h1 className="search-title">- Películas tituladas: {nameMovie} -</h1>
      <FilmList movies={movies}/>
    </React.Fragment>
  )
}