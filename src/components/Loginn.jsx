import React, { useState } from 'react'
import Header from './Header'


const Loginn = () => {
  const [isSignInform, setIsSIgnInForm] = useState(true)
  const toggleSignInForm = () => {
    setIsSIgnInForm(!isSignInform)
  }
  return (
    <div >
      <Header />
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/729ce5c2-d831-436a-8c9d-f38fea0b99b3/web/IN-en-20241209-TRIFECTA-perspective_4aef76eb-7d5b-4be0-93c0-5f67320fd878_large.jpg'></img>
      </div>
      <form className='absolute bg-black  w-3/12 p-8 my-36 mx-auto right-0 left-0 bg-opacity-80 text-white'>
        <h1 className='text-white text-3xl font-bold py-4 '>{isSignInform ? "Sign In" : "Sign Up"}</h1>
        {!isSignInform && <input type='text' placeholder='Full Name' className='p-4 my-2 w-full bg-gray-700 '></input>}
        <input type='text' placeholder='Email Address' className='p-4 my-2 w-full bg-gray-700 '></input>
        <input type='password' placeholder='Password' className='p-4 my-2 w-full bg-gray-700'></input>
        <button className='p-4 my-4 bg-red-600 text-white w-full rounded-lg'>{isSignInform ? "Sign In" : "Sign Up"}</button>
        <p className='p-4'>{isSignInform ? "New to Netflix?" : "Already a user?"} <span className='font-bold hover:cursor-pointer' onClick={toggleSignInForm}>{isSignInform ? "Sign Up now." : "Sign In now"}</span></p>
      </form>
    </div>
  )
}

export default Loginn