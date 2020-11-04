import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function C() {
	
  const count = useSelector(state => state.timer.count )
  return (
    <div >
		<p>I am Component C </p>
		<p>I have access to timer Value </p>
		<p>Timer Value is {count}</p>
    </div>
  );
}

export default C;