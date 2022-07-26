import React from 'react';
import { useEffect } from 'react';
import Main from './components/Main/Main';
import Navigation from './components/Navigation/Navigation';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchWeather } from './store/reducers/ActionCreators';
import { setUIMobile } from './store/reducers/UiSlice';

function App() {
  const dispatch = useAppDispatch();
  const {ui} = useAppSelector(state => state.UiReducer)
  const widthWindowChange = () =>{
    dispatch(setUIMobile(window.innerWidth))
  }

  useEffect(()=>{
    dispatch(fetchWeather({cnt: 8, id: 511196}))
    window.addEventListener('resize', widthWindowChange)

    return () => {
      window.removeEventListener('resize', widthWindowChange)
    }
  },[])

  return (
    <div className="App">
      {!ui.mobile && <Navigation/>}
      <Main/>    
    </div>
  );
}

export default App;

