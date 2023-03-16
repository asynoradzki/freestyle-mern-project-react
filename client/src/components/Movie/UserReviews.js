import * as React from 'react';
import { Box, Button, InputAdornment, TextField } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import { fetchData } from '../../App';



function UserReviews() {
    const [inputData, setInputData] = useState({userName: "", comment: ""})

    function handleSubmit(event) {
        event.preventDefault();
        fetchData()
    }

    return (
        <>
          
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
        </>
    );
}

export default UserReviews;
