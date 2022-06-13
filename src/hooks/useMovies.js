import { useState, useEffect } from 'react';
import getMovies from '../services/getMovieList';

export function useMovies({keyword} = {keyword: 'inception'}) {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState({});

  useEffect(function(){
    setLoading(true);

    const mockData = {
      Poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      Title: "Inception",
      Type: "movie",
      Year: "2010",
      imdbID: "tt1375666",
    };
    const mockDataList = new Array(10).fill(mockData)

    // getMovies(keyword).then(movies => {
      setMovies(mockDataList);
      setLoading(false);
    // })
  }, [keyword, setMovies]);

  return {loading, movies};
}