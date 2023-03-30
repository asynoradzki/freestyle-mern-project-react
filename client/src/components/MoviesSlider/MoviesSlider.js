import React from "react";
import Slider from "react-slick";
import MiniMovie from "../MiniMovie/MiniMovie";
import './moviesSlider.css'
import { Typography } from '@mui/material'

const MoviesSlider = ({ title, slideToShow, width, widthHover, height, heightHover }) => {

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 200,
        slidesToShow: slideToShow,
        slidesToScroll: 3,
    }
//map???
    return (
        <>
            <Typography variant='h1'>
                {title}
            </Typography>
            <Slider {...settings}>
                <div>
                    <MiniMovie
                        width={width}
                        widthHover={widthHover}
                        height={height}
                        heightHover={heightHover}
                    />
                </div>
                <div>
                    <MiniMovie
                        width={width}
                        widthHover={widthHover}
                        height={height}
                        heightHover={heightHover}
                    />
                </div>
                <div>
                    <MiniMovie
                        width={width}
                        widthHover={widthHover}
                        height={height}
                        heightHover={heightHover}
                    />
                </div>
                <div>
                    <MiniMovie
                        width={width}
                        widthHover={widthHover}
                        height={height}
                        heightHover={heightHover}
                    />
                </div>
                <div>
                    <MiniMovie
                        width={width}
                        widthHover={widthHover}
                        height={height}
                        heightHover={heightHover}
                    />
                </div>
                <div>
                    <MiniMovie
                        width={width}
                        widthHover={widthHover}
                        height={height}
                        heightHover={heightHover}
                    />
                </div>
            </Slider>
        </>
    );

}

export default MoviesSlider;