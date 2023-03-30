import React, { useEffect } from 'react'
import './homepage.css'
import { Carousel } from 'react-bootstrap'
import CarouselImage from '../../components/carouselImage/CarouselImage';
import MoviesSlider from '../../components/MoviesSlider/MoviesSlider';
import MiniMovie from '../../components/MiniMovie/MiniMovie';
import { Typography } from '@mui/material';


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
                <div className='playingNow'>
                    <MoviesSlider
                        title="PLAYING NOW"
                        slideToShow={5}
                        width="370px"
                        widthHover="390px"
                        height="480px"
                        heightHover="500px"

                    />
                </div>

                <div className='popularList'>
                    <MoviesSlider
                        title="CULT FAVORITES"
                        slideToShow={4}
                        width="480px"
                        widthHover="500px"
                        height="290px"
                        heightHover="310px"
                    />
                </div>
                <div className='actionBox'>
                    <div className='actionTitle'>
                        <Typography variant='h2' sx={{ fontFamily: 'poppins', margin: '7px' }}>ACTION-PACKED</Typography>
                    </div>

                    <div className='actionPacked'>
                        <MoviesSlider
                            slideToShow={5}
                            width="240px"
                            widthHover="260px"
                            height="310px"
                            heightHover="330px" />
                    </div>
                </div>
                <div className='laughOutLoudBox'>
                    <div className='laughOutLoudTitle'>
                        <Typography variant='h2' sx={{ fontFamily: 'poppins', margin: '7px' }}>LAUGH OUT LOUD</Typography>
                    </div>
                    <div className='laughOutLoud'>
                        <MoviesSlider
                            slideToShow={5}
                            width="240px"
                            widthHover="260px"
                            height="310px"
                            heightHover="330px" />
                    </div>
                </div>
                <div className='dramaMoviesList'>
                    <MoviesSlider
                        title="HISTORICAL EPICS"
                        slideToShow={3}
                        width="520px"
                        widthHover="540px"
                        height="600px"
                        heightHover="620px" />
                </div>
            </div>
        </div >
    )
}

export default HomePage;
