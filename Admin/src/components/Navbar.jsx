import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Settings, Home, Plus } from 'lucide-react'

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    
  return (
    <nav className="h-16 w-full bg-gradient-to-b from-[#1B004D] to-[#2E0A6F] text-white shadow-lg sticky top-0 z-30">
      <div className="w-full px-6 md:px-16 lg:px-24 xl:px-32 h-full flex items-center justify-between">
        
       
        <div className="flex items-center">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
            <Settings className="w-5 h-5 text-white" strokeWidth={2} />
          </div>
          <h1 className=' font-semibold text-xl'>
            Siva's Portal
          </h1>
        </div>

       
        <ul className=" md:flex hidden items-center gap-8">
          <li>
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              <Home className="w-4 h-4" strokeWidth={2} />
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/add-project" 
              className="inline-flex items-center gap-2 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              <Plus className="w-4 h-4" strokeWidth={2} />
              Add Projects
            </Link>
          </li>
        </ul>

        {/* CTA Button */}
        <a href='https://my-portfolio-sigma-neon-91.vercel.app/'
        target='blank'
          
          className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white text-sm font-medium px-6 py-2 rounded-lg transition-colors duration-200 md:inline-block hidden"
        >
          View Portfolio
        </a>

        {/* Mobile Menu Button */}
        <button 
          aria-label="menu-btn" 
          type="button" 
          className="md:hidden p-2  rounded-lg transition-colors duration-200"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5 text-white" strokeWidth={2} />
          ) : (
            <Menu className="w-5 h-5 text-white" strokeWidth={2} />
          )}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg md:hidden">
            <div className="px-6 py-4 space-y-4">
              <ul className="space-y-3">
                <li>
                  <Link 
                    to="/" 
                    className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Home className="w-4 h-4" strokeWidth={2} />
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/add-project" 
                    className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Plus className="w-4 h-4" strokeWidth={2} />
                    Add Projects
                  </Link>
                </li>
              </ul>
              <a
                href='https://my-portfolio-sigma-neon-91.vercel.app/' target='blank'
                className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium py-2.5 px-2 rounded-lg transition-colors duration-200"
              >
                View Portfolio
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar