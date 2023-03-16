import React from 'react'
import './MovieThumbnail.css';
const MovieThumbnail = ({ setMovieThumbnailClicked, film,  setClickedMovie } ) => {
  
   function handleClick() {
      setMovieThumbnailClicked(true)
      setClickedMovie(film)
      
   }
  
   return (
     <div className='movieThumbnail dark'>
        <button className='movieThumbnailButton goToMovie dark' onClick={handleClick} >
           <div className='movieListButtonImage dark'>
               <img src={film.imageUrl} alt={film.title} />
           </div>
           <div className='movieThumbnailButtonName dark'>
               <h3>{film.title}</h3> 
           </div>
           <div className='movieThumbnailButtonGenre dark'>
            <p>{film.genres}</p>
           </div>
           <div className='movieThumbnailButtonRuntime dark'>
            <p>{`${film.runtime} minutes`}</p>
           </div>
           
        </button>
      
     </div>
  )
}



export default MovieThumbnail;