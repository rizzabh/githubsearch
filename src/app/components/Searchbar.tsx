"use client";
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

const Searchbar = ({setUser, setLoader}:{setUser: any, setLoader:any}) => {
    const [search, setSearch] = useState('')

    const handleSubmit = async (e: { preventDefault: () => void; }) =>{
        e.preventDefault()
        if(!search) return;
        setLoader(true);
        setUser(null);
        try {
            const res = await fetch(`https://api.github.com/users/${search}`)
            const data = await res.json()
            if(data.message === 'Not Found'){
                toast.error('User Not Found')}
                setUser(data);
               
        } catch (error) {
            console.log(error)
            toast.error('Something went wrong')
        } finally{
            setLoader(false);
        }
    }
    return (
        
        <div className='align-center items-center'>
            <div><Toaster/></div>
            <div className='text-5xl max-sm:text-4xl font-bold p-8 text-center'>Search any user on <span className=' textgrad'>Github</span></div>
            <form onSubmit={handleSubmit}>
            <input
                className='m-auto p-4 bg-gray-700 bg-opacity-30 border border-gray-700 rounded-full w-8/12 flex'
                placeholder="Search Username (e.g. rizzabh)"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button className={`mt-4 mx-auto px-6 py-2 bg-gray-800 border border-gray-500 rounded-lg flex hover:bg-transparent ${!search ? 'opacity-30 hover:cursor-not-allowed' : 'opacity-100'}`} disabled={!search} >Search</button>
            </form>
        </div>
    )
}

export default Searchbar
