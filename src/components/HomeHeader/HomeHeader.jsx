import { useState } from 'react';
import { Link } from 'react-router-dom';

import './HomeHeader.scss';
import search from '../../assets/images/search.svg';

const HomeHeader = ()=> {
  const [activeDishes, setActiveDishes] = useState('/')
  return(
    <div className="header-home">
      <div className="row">
        <div className="header-left">
          <h1 className="main-text">Jaeger Resto</h1>
          <p className='date'>Tuesday, 2 Feb 2021</p>
        </div>
        <div className='label-holder'>
          <label className='label'>
            <img src={search} alt=''/>
          </label>
          <input className='input' type='search' placeholder='Search for food, coffe, etc..' />
        </div>
      </div>
      <div className='menu'>
        <Link className={`menu-link ${activeDishes === '/hotDishes' ? 'active-page' : ''}`} onClick={() => setActiveDishes("/hotDishes")} to='/hotDishes'>
        Hot Dishes
        </Link>
        <Link className={`menu-link ${activeDishes === '/coldDishes' ? 'active-page' : ''}`} onClick={() => setActiveDishes("/coldDishes")} to='/coldDishes'>
        Cold Dishes
        </Link>
        <Link className={`menu-link ${activeDishes === '/soup' ? 'active-page' : ''}`} onClick={() => setActiveDishes("/soup")} to='/soup'>
        Soup
        </Link>
        <Link className={`menu-link ${activeDishes === '/grill' ? 'active-page' : ''}`} onClick={() => setActiveDishes("/grill")} to='/grill'>
        Grill
        </Link>
        <Link className={`menu-link ${activeDishes === '/appetizer' ? 'active-page' : ''}`} onClick={() => setActiveDishes("/appetizer")} to='/appetizer'>
        Appetizer
        </Link>
        <Link className={`menu-link ${activeDishes === '/dessert' ? 'active-page' : ''}`} onClick={() => setActiveDishes("/dessert")} to='/dessert'>
        Dessert
        </Link>
        <div className='menu-border'></div>
      </div>     
    </div>
  )
}

export default HomeHeader;

