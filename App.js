import React from 'react';
import Navigation from './Navigation/Navigation';
import Logged from "./Navigation/Logged";
import * as SecureStore from 'expo-secure-store';

export default class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      isLogged: false,
    }
  }

  async _idLogged() {
    await SecureStore.getItemAsync('username').then(this.setState({ isLogged: true }))
  }

  render() {
    if(this.state.isLogged == false){
      return (
        <Navigation />
      );
    }
    else{
      return (
        <Logged />
      );
    }
  }
}
