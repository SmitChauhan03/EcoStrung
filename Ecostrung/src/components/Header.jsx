import React from 'react'
import {Link} from 'react-router-dom'


function Header() {
    return (
        <header className='sticky h-16 top-0 z-50 backdrop-blur-md  border-b border-gray-200/20 shadow-sm transition-all duration-300'>
                <nav className='flex items-center justify-between p-4'>
                    <div className='flex items-center space-x-3 border p-2 '>
                        <Link to='/' >
                        Logo
                        </Link>
                    </div>

                    <div className='flex items-center space-x-3 border rounded-lg p-2 '>
                        <Link to='/contactus' >
                            Contact Us
                        </Link>
                    </div>
                </nav>
        </header>
    )
}

export default Header