import React from 'react'
import grootan from '../Images/grootan.jpg';

const Header =()=> {
  return (
    <div className='container'>
        <nav className="navbar  navbar-dark-secondary text-black">
                 <a className="navbar-brand" href="https://www.grootan.com/" target="_blank">
                <img src={grootan} className="rounded" alt="Grootan" width="110" height="55"/>
                </a>
                <h2>Grootan 
                    <small className='text-muted'> Forms</small>
                </h2>
                <form action='https://www.linkedin.com/company/grootan-technologies?originalSubdomain=in' method="get" target='_blank'>
                <button class="btn btn-dark" type='Submit' onclick="https://reactjs.org/" target="_blank">Search</button>
                </form>
                </nav> 
        <hr></hr>
        </div>
  )
}

export default Header;
