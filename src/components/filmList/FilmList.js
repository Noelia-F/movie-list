import React from 'react';
import './FilmList.css';

function FilmList() {
  return (
    <section>
      <ul className='film-list'>
        <li className='film-list__element'>
          <img className='film-list__image' src="https://picsum.photos/id/237/200/300"/>
          <div className='film-list__content'>
            <h3 className='film-list__title'>Title</h3>
            <p className='film-list__text'>Text here</p>
          </div>
        </li>
        <li className='film-list__element'>
          <img className='film-list__image' src="https://picsum.photos/id/237/200/300"/>
          <div className='film-list__content'>
            <h3 className='film-list__title'>Title</h3>
            <p className='film-list__text'>Text here</p>
          </div>
        </li>
        <li className='film-list__element'>
          <img className='film-list__image' src="https://picsum.photos/id/237/200/300"/>
          <div className='film-list__content'>
            <h3 className='film-list__title'>Title</h3>
            <p className='film-list__text'>Text here</p>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default FilmList;