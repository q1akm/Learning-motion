import React from 'react'

const MovieCard = ({ movie }) => {
  return (

         <div className="mt-5   w-[240px] mx-6  text-black flex p-4 flex-col justify-center items-center ">
                <div className=''>
                    <p>{movie.Year}</p>
                </div>

                <div>
                    <img className='w-full rounded-xl' src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} />
                </div>

                <div className=' font-mono'>
                    <h3 className='w-60 text-lg flex justify-center font-serif'>{movie.Title}</h3>
                </div>
            </div>


  )
}

export default MovieCard;