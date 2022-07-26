import { Box, SwipeableDrawer } from '@mui/material'
import React, { ReactElement } from 'react'
import ListNavigation from '../Navigation/ListNavigation';

interface Props {
    showDrawer: boolean;
    setShowDrawer: Function;
}

export default function CitiesDrawer({ showDrawer, setShowDrawer }: Props) {
    return (
        <SwipeableDrawer
            anchor={"left"}
            open={showDrawer}
            onClose={setShowDrawer(false)}
            onOpen={setShowDrawer(true)}
        >
            <Box
                sx={{ width: "250px" }}
                role="presentation"
                onClick={setShowDrawer(false)}
                onKeyDown={setShowDrawer(false)}
            >
                <ListNavigation />
            </Box>
        </SwipeableDrawer >
    )
}
