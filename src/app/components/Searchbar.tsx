import React from 'react'

const Searchbar = () => {
    return (
        <div>
            <input
                className='m-auto p-4 bg-gray-700 bg-opacity-30 border border-gray-700 rounded-full w-8/12 flex'
                placeholder="Search Username (e.g. rizzabh)"
                
            />
            <button className='mt-4 mx-auto px-6 py-2 bg-gray-800 border border-gray-500 rounded-lg flex hover:bg-transparent'>Search</button>
            
        </div>
    )
}

export default Searchbar
