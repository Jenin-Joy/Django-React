import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navebar = () => {
    const [locbtn, setlocbtn] = useState(false)
    const [users, setusers] = useState(false)
    const [sidebar, setsidebar] = useState(true)
    return (
        <div className='container'>
            <div className='main-content'>
                <div className={sidebar ? 'view sidebar-container' : 'non-view sidebar-container'}>
                    <div className='mask'>
                        <div className='admin-icon-container'>
                            <div className='admin-icon'>
                                <i class="fa-solid fa-user"></i>
                            </div>
                            <div className='admin-details'>
                            Admin <div className='admin-active'></div>
                            </div>
                        </div>
                        <div className='sidebar-content'>
                            <i class="fa-solid fa-house"></i> <Link to="/Admin" className='sidebar-content-link'>Dasboard</Link>
                        </div>
                        <div className='sidebar-content'>
                            <button className='dropdown-btn' onClick={() => setlocbtn(!locbtn)}><i class="fa-solid fa-file"></i>&nbsp;&nbsp;Basic Datas</button>
                            <ul className={locbtn ? 'list' : 'non-list'}>
                                <li><Link to="District" className='sidebar-content-link'><i class="fa-solid fa-location-dot"></i> District</Link></li>
                                <li><Link to="Place" className='sidebar-content-link'><i class="fa-solid fa-map-location-dot"></i> Place</Link></li>
                                <li><Link to="Category" className='sidebar-content-link'><i class="fa-solid fa-list"></i> Category</Link></li>
                                <li><Link to="Subcategory" className='sidebar-content-link'><i class="fa-solid fa-list"></i> Subcategory</Link></li>
                            </ul>
                        </div>
                        <div className='sidebar-content'>
                            <button className='dropdown-btn' onClick={() => setusers(!users)}><i class="fa-solid fa-users"></i>&nbsp;&nbsp;Users</button>
                            <ul className={users ? 'list' : 'non-list'}>
                                <li><Link to="User" className='sidebar-content-link'><i class="fa-solid fa-user"></i> User</Link></li>
                                <li><Link to="NewShop" className='sidebar-content-link'><i class="fa-solid fa-shop"></i> New Shop</Link></li>
                                <li><Link to="ApprovedShop" className='sidebar-content-link'><i class="fa-solid fa-shop-lock"></i> Approved Shop</Link></li>
                                <li><Link to="RejectedShop" className='sidebar-content-link'><i class="fa-solid fa-shop-slash"></i> Rejected Shop</Link></li>
                            </ul>
                        </div>
                        <div className='sidebar-content'>
                            sidebar
                        </div>
                    </div>
                </div>
                <div className='navbar'>
                    <nav>
                    <div className='first-part'>
                    <i class="fa-solid fa-bars bar" onClick={() => setsidebar(!sidebar)}></i>
                        <div className='admin-container'>
                            Welcome
                        </div>
                    </div>
                        <div className='logos'></div>
                    </nav>
                    <div className='contents'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navebar