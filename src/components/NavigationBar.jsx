import React from 'react';
import '../bootstrap.css';

const NavigationBar = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid'>
          <a class='navbar-brand' href='#/'>Home</a>
          <button class='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarColor03' aria-controls='navbarColor03' aria-expanded='false' aria-label='Toggle navigation'>
            <span class='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse'>
            <ul className='navbar-nav me-auto'>
              <li class='nav-item'>
                <a class='nav-link' href='#/all-games'>All games</a>
              </li>

              <li class='nav-item'>
                <a class='nav-link' href='#/2021-2022/all'>Games from 2021-2022</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavigationBar;