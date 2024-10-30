import React, { Component } from 'react'
import './App.scss';
import ReactForm from './ReactForm';
import { Switch, Route, Routes, useParams } from 'react-router-dom';
import UserDetails from './UserDetails';

class App extends React.Component {
  render() {
    return(
      <div>
        <Routes>
          <Route
            exact 
            path='/'
            Component={() => <ReactForm />}
          />
        </Routes>
        {/* <ReactForm /> */}
        <Routes>
          <Route
            exact 
            path='/user-details'
            Component={() => <UserDetails inputEmailValue={this.props.inputEmailValue} />}
          />
        </Routes>
      </div>
    )
  }
}

export default App;
