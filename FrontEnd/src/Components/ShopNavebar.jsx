import React from 'react'
import { Outlet } from 'react-router-dom'

const ShopNavebar = () => {
  return (
    <div>
      <div className='mainbar'>
        <nav className='shopnavbar'>
          <div className='bar admin-container shop-welcome'>
            Welcome
          </div>
        </nav>
      </div>
      <Outlet/>
    </div>
  )
}

export default ShopNavebar