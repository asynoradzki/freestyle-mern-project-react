import React from 'react'
import './MovieThumbnail.css';
const MovieThumbnail = () => {
  return (
     <div className='movieThumbnail dark'>
        <button className='movieThumbnailButton dark'>
           <div className='movieListButtonImage dark'>
              {/* <img src={imageUrl} alt={title} /> */}
              <img src={"abc"} alt={"abc"} />
           </div>
           <div className='movieThumbnailButtonName dark'>
              {/* <h3>{title}</h3> */} <h3>The Loneliness of the Long Distance Runner</h3>
           </div>
           <div className='movieThumbnailButtonGenre dark'>
            {/* <p>{genres}</p> tutaj map po array z genres? */} <p>Drama, Drama, Kremowka</p>
           </div>
           <div className='movieThumbnailButtonRuntime dark'>
            {/* <p>{`${runtime} minutes`}</p> */} <p>2137 minutes</p>
           </div>
      </button>
     </div>
  )
}



export default MovieThumbnail;