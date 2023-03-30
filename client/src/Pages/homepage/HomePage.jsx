import React, { useEffect } from 'react'
import './homepage.css'
import { Carousel } from 'react-bootstrap'
import CarouselImage from '../../components/carouselImage/CarouselImage';
import MoviesSlider from '../../components/MoviesSlider/MoviesSlider';
import MiniMovie from '../../components/MiniMovie/MiniMovie';

const HomePage = () => {
    //do rozwazenia <Carousel fade>
    return (
        <div className='homepage'>
           
            <Carousel>
                <Carousel.Item interval={8000}>
                    <CarouselImage />
                </Carousel.Item>
                <Carousel.Item interval={8000}>
                    <CarouselImage />
                </Carousel.Item>
                <Carousel.Item interval={8000}>
                    <CarouselImage />
                </Carousel.Item>
            </Carousel> 
           
            
            <div className='moviesLists'>
                <MoviesSlider
                    title="PLAYING NOW"
                    slideToShow={4}
                    width="400px"
                    widthHover="420px"
                    height="500px"
                    heightHover="520px"
                   
                />
            </div> 

                <div className='popularList'>
                    <MoviesSlider
                        title="CULT FAVORITES"
                        slideToShow={3}
                        width="500px"
                        widthHover="520px"
                        height="300px"
                    heightHover="320px"
                    />
                </div>
                <div className='topRatedList'>
                    <MoviesSlider
                        title="ACTION-PACKED"
                        slideToShow={5}
                        width="200px"
                        widthHover="210px"
                        height="250px"
                        heightHover="260px" />
                </div>
                <div className='actionMoviesList'>
                    <MoviesSlider
                        title="LAUGH-OUT-LOUD"
                        slideToShow={6}
                        width="200px"
                        widthHover="210px"
                        height="250px"
                        heightHover="260px" />
                </div>
                <div className='dramaMoviesList'>
                    <MoviesSlider
                        title="HISTORICAL EPICS"
                        slideToShow={3}
                        width="400px"
                        widthHover="420px"
                        height="500px"
                        heightHover="520px" />
                </div> 
          
        </div >
    )
}

export default HomePage;
