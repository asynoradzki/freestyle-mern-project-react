import React from 'react'
import './MovieThumbnail.css';
const MovieThumbnail = ( { imageUrl, title, genres, runtime } ) => {
  return (
     <div className='movieThumbnail dark'>
        <button className='movieThumbnailButton dark'>
           <div className='movieListButtonImage dark'>
              <img src={imageUrl} alt={title} />
           </div>
           <div className='movieThumbnailButtonName dark'>
              <h3>{title}</h3> 
           </div>
           <div className='movieThumbnailButtonGenre dark'>
            <p>{genres}</p>
           </div>
           <div className='movieThumbnailButtonRuntime dark'>
            <p>{`${runtime} minutes`}</p>
           </div>
      </button>
     </div>
  )
}



export default MovieThumbnail;