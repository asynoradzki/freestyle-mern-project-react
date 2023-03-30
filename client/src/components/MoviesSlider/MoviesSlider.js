import React from "react";
import Slider from "react-slick";
import MiniMovie from "../MiniMovie/MiniMovie";
import './moviesSlider.css'
import { Typography } from '@mui/material'
import { useState, useEffect } from "react";

const MoviesSlider = ({ title, slideToShow, width, widthHover, height, heightHover, allFilms }) => {
    const [movieToDisplayList, setMovieToDisplayList] = useState([])

    useEffect(() => {
        console.log(allFilms)
        if (allFilms) {
            setMovieToDisplayList(allFilms)
        }
    }, [allFilms])


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
           <Typography variant='h5' sx={{ fontFamily: 'poppins', margin: '7px' }}>
                {title}
            </Typography>
            <Slider {...settings}>
                {( movieToDisplayList.slice(0, 8).map((movie, index) => (
                    <div key={index}>
                        <MiniMovie
                            width={width}
                            widthHover={widthHover}
                            height={height}
                            heightHover={heightHover}
                            movie={movie}
                        />
                    </div>
                )))}
            </Slider>
        </>
    );

}

export default MoviesSlider;