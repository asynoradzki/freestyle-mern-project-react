import * as React from 'react';
import UsersReviews from './UsersReviews';
import { Box, Button, InputAdornment, TextField } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SendIcon from '@mui/icons-material/Send';
import { useState, useEffect } from 'react';
import { fetchData } from '../../App';

const url = 'http://127.0.0.1:3001/api/comments'

function ReviewInput({ clickedMovie }) {
    const [inputData, setInputData] = useState({ movieTitle: "", userName: "", comment: "" })
    const [allComments, setAllComments] = useState([])

    useEffect(() => {
        if (clickedMovie) {
            setInputData({ ...inputData, movieTitle: clickedMovie.title })
            getData(clickedMovie.title)

        }
    }, [clickedMovie])


    async function getData() {
        const response = await fetch(`${url}/${clickedMovie.title}`)
        const responseData = await response.json();
        console.log(responseData)
        setAllComments(responseData)
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const response = await fetchData(url, "POST", inputData)
        await getData();
        setInputData({ movieTitle: "", userName: "", comment: "" })
    }

    return (
        <div className='reviewInput'>
            <UsersReviews allComments={allComments} />
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '60ch' },
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <TextField
                    id="input-with-icon-textfield"
                    label="Type your name"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        ),
                    }}
                    variant="standard"
                    value={inputData.userName}
                    onChange={e => setInputData({ ...inputData, userName: e.target.value })}
                />
                <TextField
                    id="outlined-multiline-flexible"
                    label="Multiline"
                    multiline
                    rows={7}
                    value={inputData.comment}
                    onChange={e => setInputData({ ...inputData, comment: e.target.value })}
                />
                <Button type="submit" variant="contained" endIcon={<SendIcon />}>
                    Send
                </Button>
            </Box>
        </div>
    );
}

export default ReviewInput;
