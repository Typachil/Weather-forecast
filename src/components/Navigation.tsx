import { Box, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'
import CitiesArr from '../store/utils/cities'

export default function Navigation() {
  return (
    <Box component="div" sx={{backgroundColor: "info.light"}}>
        <List>
            {CitiesArr.map(item => {
                return (
                    <ListItemButton key={item.id}>
                        <ListItemText primary={item.name}/>
                    </ListItemButton>
                )
            })}
        </List>
    </Box>
  )
}
