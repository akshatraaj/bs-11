import React from 'react';
import {View, Image} from 'react-native';

export default class SantaAnimation extends React.Component {
  render() {
    return (
      <Image
      source={require('../assets/BookSanta.svg')}
      style={{width:"60%"}}
       />
    )
  }
}