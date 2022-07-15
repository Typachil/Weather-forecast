import React from 'react';
import { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import PostContainer from './components/PostContainer';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchUsers } from './store/reducers/ActionCreators';

function App() {
  // const {users, isLoading, error} = useAppSelector(state => state.userReducer)
  // const dispatch = useAppDispatch();

  // useEffect(()=>{
  //   dispatch(fetchUsers())
  // },[])

  return (
    <div className="App">
      <Header/>
      <PostContainer />
    </div>
  );
}

export default App;
