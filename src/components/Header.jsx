import { Link } from 'react-router-dom';
import logo from '../assets/cryptopulse_logo.png'
import { useState } from 'react';

export default function Header() {

  const [search, setSearch] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log(search);
    setSearch('');
  }

  return (
    <div className='header'>
      <Link to='/'>
        <div className='logo'>
          <img src={logo} alt='image logo' />
        </div>
      </Link>

        <form onSubmit={handleSubmit}>
          <input
            className='search-bar'
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Search markets or assets...'
          />
        </form>

        <Link to='/notifications' className='nav-option'>
          <p>Notifications</p>
        </Link>


        <Link to='/saved' className='nav-option'>
          <p>Saved</p>
        </Link>
    </div>
  )
}
