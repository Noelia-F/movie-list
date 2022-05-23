import React from 'react';
import './Home.css';
import HeaderPage from '../../components/header/HeaderPage';
import FooterPage from '../../components/footer/FooterPage';
import FilmList from '../../components/filmList/FilmList';


function Home() {
  return (
    <>
      <HeaderPage />
      <FilmList />
      <FooterPage />
    </>
  )
}

export default Home;