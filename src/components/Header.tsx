import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material'
import React, { useState } from 'react'
import { IPost } from '../models/IPost';
import { postApi } from '../services/PostService';
import FormCreatePost from './FormCreatePost';

export default function Header() {
    const [openForm, setOpenForm] = useState(false)

    return (
        <Box sx={{ flexGrow: 1, mb: 4 }}>
            <AppBar position="static">
                <Toolbar sx={{display: "flex", justifyContent: 'space-between'}}>
                    <Typography variant="h6" component="div">
                        Новости
                    </Typography>
                    <Button onClick={() => setOpenForm(!openForm)} color="inherit" size="large">
                        Добавить новый пост
                    </Button>
                </Toolbar>
            </AppBar>
            <FormCreatePost handleClose={() => setOpenForm(!openForm)} open={openForm}/>
        </Box>
    )
}
