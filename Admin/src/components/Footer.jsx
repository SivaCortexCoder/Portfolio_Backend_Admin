import React from 'react'

const Footer = () => {
  return (
   <footer className="w-full bg-gradient-to-b from-[#1B004D] to-[#2E0A6F] text-white">
            <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center">
                <div className="flex items-center space-x-3 mb-6">
                   <h1 className='text-2xl font-bold'>Sivakumar's Admin Portal</h1>
                </div>
                <p className="text-center max-w-xl text-sm font-normal leading-relaxed">
                    Managing my world effortlessly with the most advanced organizational and creative solutions. Turn my everyday ideas into meaningful actions and results.
                </p>
            </div>
            <div className="border-t border-[#3B1A7A]">
                <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm font-normal">
                    <a href="https://my-portfolio-sigma-neon-91.vercel.app/">Sivakumar K</a> © 2025. All rights reserved.
                </div>
            </div>
        </footer>
  )
}

export default Footer