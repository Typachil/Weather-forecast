import React from 'react';
import { useEffect } from 'react';
import Main from './components/Main/Main';
import Navigation from './components/Navigation';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchWeather } from './store/reducers/ActionCreators';

function App() {
  const dispatch = useAppDispatch();

  useEffect(()=>{
    dispatch(fetchWeather({cnt: 8, lat: 58.0105, lon: 56.2502}))
  },[])

  return (
    <div className="App">
      <Navigation/>
      <Main/>    
    </div>
  );
}

export default App;
