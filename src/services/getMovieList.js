const apiKey = '56030e76';

export default function getMovies({keyword = 'inception'} = {}) {
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
}