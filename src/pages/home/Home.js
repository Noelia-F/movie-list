import React, {useState} from 'react';
import './Home.css';
import HeaderPage from '../../components/header/HeaderPage';
import FooterPage from '../../components/footer/FooterPage';
import FilmList from '../../components/filmList/FilmList';
import { useMovies } from '../../hooks/useMovies';


function Home() {
  const [keyword, setKeyword] = useState('');
  const { movies, loading } = useMovies();
  const handleSubmit= evt => {
    evt.preventDefault();
  };
  const handleChange = evt => {
    setKeyword(evt.target.value);
  };

  console.log(movies);
  return (
    <>
      <HeaderPage />
      <form onSubmit={handleSubmit}>
        <input placeholder='Busca tu película...' onChange={handleChange} type="text" value={keyword}/>
      </form>
      <FilmList movies={movies} />
      <FooterPage />
    </>
  )
}

export default Home;