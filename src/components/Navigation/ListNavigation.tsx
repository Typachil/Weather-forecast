import { Box, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchWeather } from '../../store/reducers/ActionCreators';
import CitiesArr from '../../store/utils/cities';
import './navigation.scss';

export default function ListNavigation() {
    const { weatherCity } = useAppSelector(state => state.weatherReducer);
    const dispatch = useAppDispatch()

    const handleListItemClick = (
        index: number
    ) => {
        dispatch(fetchWeather({ id: index }))
    };

    return (
        <List className="navigation">
            {CitiesArr.map(item => {
                return (
                    <ListItemButton selected={weatherCity.city.id === item.id} onClick={() => handleListItemClick(item.id)} sx={{ padding: "10px 20px 10px 30px" }} className="navigation-item" key={item.id}>
                        <ListItemText primaryTypographyProps={{
                            fontSize: "1.2vmax",
                            fontWeight: 'medium',
                            letterSpacing: 0,
                        }} primary={item.name} />
                    </ListItemButton>
                )
            })}
        </List>
    )
}
