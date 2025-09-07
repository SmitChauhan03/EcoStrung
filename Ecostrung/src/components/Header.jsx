import React from 'react'
import {Link} from 'react-router-dom'


function Header() {
    return (
        <header className='sticky h-16 top-0 z-50 backdrop-blur-md  border-b border-gray-200/20 shadow-sm transition-all duration-300'>
                <nav className='flex items-center justify-between p-4'>
                    <div className='text-xl font-light text-gray-900 hover:text-gray-700 transition-colors duration-200 tracking-wide '>
                        <Link to='/' >
                        <span className='font-medium'>Your</span>Logo
                        </Link>
                    </div>

                    <div className='bg-gray-900 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-all duration-200 shadow-sm hover:shadow-md'>
                        <Link to='/contactus'  >
                            Contact Us
                        </Link>
                    </div>
                </nav>
        </header>
    )
}

export default Header                   













