import React from 'react'

const Header = () => {
  return (
    <div>
       <div className="container m-auto">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-bold text-xl">
Sai Tharun
              </h1>
            </div>
            <div >
              <ul className='flex gap-4'>
                <li>
                  <a className="text-gray-400 hover:text-white cursor-pointer">About me</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white cursor-pointer">Skills</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white cursor-pointer">Projects</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white cursor-pointer">Education</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header;
