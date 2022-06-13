import React, {useState} from 'react';
import './Home.css';
import {Link, useLocation} from 'wouter';
import HeaderPage from '../../components/header/HeaderPage';
import FooterPage from '../../components/footer/FooterPage';


function Home() {
  const [keyword, setKeyword] = useState('');
  const [path, pushLocation]= useLocation();

  const handleSubmit= evt => {
    evt.preventDefault();
    pushLocation(`/search/${keyword}`);
  };
  const handleChange = evt => {
    setKeyword(evt.target.value);
  };

  return (
    <>
      <HeaderPage />
      <form onSubmit={handleSubmit}>
        <input placeholder='Busca tu película...' onChange={handleChange} type="text" value={keyword}/>
      </form>
      <FooterPage />
    </>
  )
}

export default Home;