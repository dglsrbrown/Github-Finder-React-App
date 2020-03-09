import React, { Fragment } from 'react';
import spinner from './spinner.gif';

export const Spinner = () => 
//since this is an arrow function it can be returned directly without return()
  <Fragment>
    <img
      src={spinner}
      alt='Loading...'
      style={{ width: '200px', margin: 'auto', display: 'block' }}
    ></img>
  </Fragment>;

export default Spinner;
