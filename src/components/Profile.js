import React, { Component } from 'react';

//Child Component / Profile (Functional Component)
const Profile = (props) => {
  const classes = props.selected ? 'bold' : '';
  return (
    <li onClick={ props.onClick } className={classes}>
      <i className="fa fa-user"></i> { props.user.name } 
    </li>
  );
};

export default Profile;