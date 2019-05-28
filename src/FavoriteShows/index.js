import React from 'react';

import './FavoriteShows.css';

let counter = 1;
const category = ['off-broadway', 'broadway'];

const FavoriteShows = ({ shows }) => (
  <ul className='fav-shows-list'>
    <div>Your Favorite Shows...</div>
    {shows.slice(0, 15).map(item => (
      <li key={item.id} className='fav-shows-list-item'>
        <h4 className='fav-shows-title'>{item.title}</h4>
        <div className='fav-shows-category'>
          <span className='fav-shows-category'>
            Category:{' '}
            {item.id % 3 === 0 || item.id % 5 === 0 ? category[0] : category[1]}
          </span>
        </div>
        <div className='fav-shows-showurl'>
          <span>Show {counter++}</span>
        </div>
        <div />
      </li>
    ))}
  </ul>
);

export default FavoriteShows;
