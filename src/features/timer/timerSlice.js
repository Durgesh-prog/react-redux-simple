import { createSlice } from '@reduxjs/toolkit';

export const timerSlice = createSlice({
  name: 'timer',
  initialState: {
    count:10,
	runningTimer:true
  },
  reducers: {
    update: state => {
      state.count += 1;
    },
	stopTimer:state => {
		state.runningTimer = false;
	}
  }
});


export const incrementTimer = () => (dispatch,getState) => {
 		 setInterval(() => {
			if(getState().timer.runningTimer) dispatch(update())
		  },1000);

};

export const { update,stopTimer } = timerSlice.actions;

export default timerSlice.reducer;

