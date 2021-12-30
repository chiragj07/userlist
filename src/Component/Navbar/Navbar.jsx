import React from 'react'
const Navbar = ({handleSearch, handleChange}) => {
     
    return (
        <nav class="font-sans bg-blue-200 flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-6 px-6 shadow sm:items-baseline w-full">
  <div class="mb-2 sm:mb-0">
    <h1 class="text-4xl no-underline text-grey-darkest hover:text-blue-dark">User List</h1>
  </div>
  <div>
  <input className="border-2 border-black md:w-60 h-8" type="text" placeholder="Name or Id of user"  onChange={handleChange}  />
  <button className="ml-4 p-1 border-2 bg-gray-400 text-white" onClick={handleSearch}> search</button>
  </div>
</nav>

        
    )
}

export default Navbar
