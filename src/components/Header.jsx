import React from 'react'
import netflix_logo from '../images/netflix_logo.png'

const Header = () => {
  return (
    <div className='absolute px-32 bg-gradient-to-b from-black z-10'>
      <img className='w-52' src={netflix_logo} alt='logo'></img>
    </div>
  )
}

export default Header