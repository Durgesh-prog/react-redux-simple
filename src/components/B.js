import React from 'react';
import Timer from './Timer'
import { useSelector , useDispatch } from 'react-redux';
import {
  stopTimer
} from '../features/timer/timerSlice';

function B() {
	
  const dispatch = useDispatch();
   const appState = useSelector(state => state.timer.runningTimer);
  
  return (
    <div >
	  <p>I am Component B and I have imported Timer</p>
	  <Timer />
	  <button onClick={() => dispatch(stopTimer())} >Click Me {appState?'Stop':'Restart'} </button>
    </div>
  );
}

export default B;