import { Box } from '@mui/material'
import React from 'react'
import blue from '@mui/material/colors/blue';
import ListNavigation from './ListNavigation';

export default function Navigation() {
    return (
        <Box component="div" sx={{ backgroundColor: blue[200] }}>
            <ListNavigation/>    
        </Box>
    )
}
