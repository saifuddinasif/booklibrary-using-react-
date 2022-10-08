import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Root = () => {
  return (
    <div>
      <Header />
      <Outlet />
      {/* you can give footer herre manually  */}
    </div>
  )
}

export default Root
