import React from 'react'
import Loginn from './Loginn'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<Loginn />
    },
    {
      path:"/browse",
      element:<Browse />
    },
  ])
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body