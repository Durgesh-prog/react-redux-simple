import React from 'react';
import B from './B';
import C from './C';
import Timer from './Timer';

function A() {
  return (
    <div >
      <header >
		<p>I am Root Component</p>
      </header>
		<p style={{borderBottom:'2px solid red'}}>Compnent B </p>
		<B />
		<p style={{borderBottom:'2px solid red'}}>Compnent C </p>
		<C />
		<p style={{borderBottom:'2px solid red'}}>Timer </p>
		<Timer />
    </div>
  );
}

export default A;
