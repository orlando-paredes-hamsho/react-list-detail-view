import React, { Component } from 'react';
import $ from 'jquery';

import Selection from './components/Selection';
import Profile from './components/Profile';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = { users: [], userId: null, user: null };
  }
  
  componentWillMount() {
    $.get('http://jsonplaceholder.typicode.com/users')
    .then((users) => { 
      this.setState({ users }); 
    });
  }
  
  handleProfileClick(user){
    this.setState({ userId: user.id, user: user });
  }
  handleButtonClick(){
    this.setState({ userId: null, user: null });
  }
  
  renderSelection(){
    return (
      <div className='selection'>
        <Selection user={this.state.user}/>
        <button onClick={() => {this.handleButtonClick()}}>Close Profile</button>
      </div>
    )
  }
  
  renderProfiles(){
    return this.state.users.map((user) => {
      return (
        <Profile
          selected = {user.id === this.state.userId}
          key = {user.id} 
          user = {user} 
          onClick = { () => {this.handleProfileClick(user)} }
        />
      );
    });
  }
  
  render(){
    return (
      <div>
        <h3>Employee Directory</h3>
        {(this.state.user) ? this.renderSelection() : null }
        {this.renderProfiles()}
      </div>
    );
  }
}
