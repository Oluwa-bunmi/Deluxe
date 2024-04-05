import React from 'react'
import { FiSearch } from "react-icons/fi";

const Search = () => {
  return (
 
        <div>
              <div className="flex items-center gap-[34px] pt-5">
          <div className="bg-light w-[300px] py-[12px] gap-[16px] flex justify-center items-center rounded-[20px] text-primary">
            <FiSearch className='text-dark' />
            <input
              type="text"
              placeholder="Search for something"
              className="text-[12px] border-none outline-none bg-transparent text-primary placeholder-primary"
            />
          </div>
          </div>

    </div>
  )
}

export default Search
