import React,{useState,useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementTimer,
  update,
  stopTimer
} from '../features/timer/timerSlice';

function Timer() {
	
  const time = useSelector(state => state.timer.count);
  const dispatch = useDispatch();

  useEffect(() => {
	dispatch(incrementTimer())
  },[])
  
  return (
    <div >
		<p>Timer Component</p>
		<p>{time}</p>
    </div>
  );
}

export default Timer;