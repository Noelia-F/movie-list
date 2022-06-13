import { useState, useEffect } from 'react';
import getMovies from '../services/getMovieList';

export function useMovies({keyword} = {keyword: 'inception'}) {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState({});

  useEffect(function(){
    setLoading(true);

    getMovies(keyword).then(movies => {
      setMovies(movies);
      setLoading(false);
    })
  }, [keyword, setMovies]);

  return {loading, movies};
}