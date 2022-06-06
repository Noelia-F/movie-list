import React from 'react';
import './FilmList.css';

function FilmList({movies}) {
  return (
    <section>
      <ul className='film-list'>
        {movies.length > 0 ? movies.map((movie) => <li className='film-list__element'>
          <img className='film-list__image' src={movie.Poster}/>
          <h3 className='film-list__title'>{movie.Title}</h3>
          <div className="film-list__extra">
              <p className='film-list__text'>{movie.Year}</p>
              <p className='film-list__text'>{movie.Type}</p>
          </div>
        </li>) : <div>Hi</div>}
      </ul>
    </section>
  )
}

export default FilmList;