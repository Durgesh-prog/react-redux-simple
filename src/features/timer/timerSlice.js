import { createSlice } from '@reduxjs/toolkit';

let myInterval;

export const timerSlice = createSlice({
  name: 'timer',
  initialState: {
    count:0,
	runningTimer:true
  },
  reducers: {
    update: state => {
      state.count += 1;
    },
	stopTimer:state => {
		if(state.runningTimer){
			state.runningTimer = false;
			clearInterval(myInterval);
		}else{
			state.count = 0;
			state.runningTimer = true;
		} 
	}
  }
});


export const incrementTimer = () => (dispatch,getState) => {
 		myInterval =  setInterval(() => {
			if(getState().timer.runningTimer) dispatch(update())
		  },1000);

};

export const { update,stopTimer } = timerSlice.actions;

export default timerSlice.reducer;

