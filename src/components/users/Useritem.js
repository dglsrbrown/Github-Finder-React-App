import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Useritem = ({ user: { login, avatar_url, html_url } }) => {
  //state is just a javascript object
  // you don't need a constructor to define your state
  // constructor() {
  //   super();
  //   console.log(123);
  // }
  /*
        without super it will not work and all has to be above render
        this.state is a variant of ---> const [state, setstate] = useState(initialState)
        this.state is an obj
        */

  //this.

  //}// we removed the constructor funtion - here is the closing bracket

  // render() {
  //destructuring so we don't have to use this.state each time
  // const { login, avatar_url, html_url } = props.user;
  //destructuring - pulling out the variable out of the object - so you don't have to constantly type this.state
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt=''
        className='round-img'
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
          More
        </Link>
      </div>
    </div>
  );
  // }
};
Useritem.propTypes = {
  user: PropTypes.object.isRequired
};

export default Useritem;
