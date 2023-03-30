import './carouselImage.css'
import { Carousel } from 'react-bootstrap'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Button from '@mui/material/Button';


const CarouselImage = () => {
  return (
    <div className='carouselImage'>
      <img
        className="carouselImage"
        src="https://fwcdn.pl/webv/02/03/60203/60203.4.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3 className='title'>The Batman</h3>
        <p className='rating'>8.9 240 votes</p>
        <p className='runtime'>280 min</p>
        <p className='releaseDate' >Release date: March 04, 2022</p>
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