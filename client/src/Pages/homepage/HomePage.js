import React, { useEffect } from 'react'
import './homepage.css'
import { Carousel } from 'react-bootstrap'
import CarouselImage from '../../components/carouselImage/CarouselImage';


const HomePage = ({ setIsDrawerOpen }) => {

    useEffect(() => {
        setIsDrawerOpen(false)
    }, [])

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
                    <CarouselImage />x
                </Carousel.Item>
            </Carousel>
        </div>)
}


export default HomePage