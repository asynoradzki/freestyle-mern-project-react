import './carouselImage.css'
import { Carousel } from 'react-bootstrap'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";




const CarouselImage = ({ movie }) => {
  const { url, title, runtime, year, genres } = movie
  const navigate = useNavigate();


  return (
    <div className='carouselImage'>
      <img
        className="carouselImage"
        src={url}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3
          onClick={() => navigate(`/movies/${movie._id}`)}
          className='title'>{title}</h3>
        <p className='genre'>{genres.join(', ')}</p>
        <p className='runtime'>{runtime} min</p>
        <p className='releaseDate' >Release year: {year}</p>
        <Button variant="outlined" size="xx-large" className='watchlist'
          sx={{ color: "white", fontSize: '20px', fontFamily: "poppins", fontWeight: "bold", "&:focus": {
      outline: "2px solid white",
    }, }}>
          <AddCircleOutlineIcon sx={{fontSize: "27px", margin: '10px'}} />
            Add to watchlist
          </Button>
      </Carousel.Caption>
    </div>


  )
}

export default CarouselImage