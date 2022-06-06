const apiKey = '56030e76';

export default function getMovies({keyword = 'inception'} = {}) {
  const mockData = {
    Poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    Title: "Inception",
    Type: "movie",
    Year: "2010",
    imdbID: "tt1375666",
  };
  const mockDataList = new Array(10).fill(mockData)
  const apiURL = `http://www.omdbapi.com/?s=${keyword}&apikey=${apiKey}`;
  return fetch(apiURL)
    .then(res => res.json())
    .then(response => {
      const {Search} = response;
      const movies = Search.map(movie => {
        const {Poster, Title, Type, Year} = movie;
        return {Poster, Title, Type, Year};
      });
      return movies;
    });
  // //  Datos mockeados hasta terminar maquetacion
}