import { useState } from 'react';
import './MiniMovie.css'
import { Card, CardContent, Typography, CardMedia, CardActions, Button, Tooltip, Fade } from '@mui/material';

const MiniMovie = ({ width, widthHover, height, heightHover }) => {
    const [hover, setHover] = useState(false);

    return (
        <Card
            sx={{
                width: hover ? widthHover : width,
                height: hover ? heightHover : height,
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <CardContent sx={{ position: 'relative' }}>
                <CardMedia
                    sx={{
                        position: 'absolute',
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        filter: hover ? 'blur(2px)' : 'none',
                        border: hover ? '2.5px solid red' : "1px solid #232531",
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            zIndex: 1,
                            background: `linear-gradient(to bottom, rgba(0,0,0,0) 30%, #1d1e21 100%)`,
                        },
                        
                    }}
                    image="https://fwcdn.pl/webv/02/03/60203/60203.4.jpg" title="movie" />

                <Fade in={hover} timeout={1000}>
                    <div className='description'>
                        <Tooltip>
                            <Typography className='description' variant="body1">
                                When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.
                            </Typography>
                        </Tooltip>
                    </div>
                </Fade>
            </CardContent>
        </Card>
    );
};

export default MiniMovie;