import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
 
const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const slides = [
  {
    key: 'somethun',
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    backgroundColor: '#59b2ab',
  },
  {
    key: 'somethun-dos',
    title: 'Title 2',
    text: 'Other cool stuff',
    backgroundColor: '#febe29',
  },
  {
    key: 'somethun1',
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    backgroundColor: '#22bcb5',
  }
];
 
export default class Slider extends Component {
  constructor(props){
    super(props)
    this.state = {
      showRealApp: false
    }
  }
  
  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Text>"hi"</Text>
      </View>
    );
  }
  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Text>"bye"</Text>
      </View>
    )
  }

  _onDone = () => {}
  render() {
    return (
        <AppIntroSlider
          slides={slides}
          renderDoneButton={this._renderDoneButton._onDone}
          renderNextButton={this._renderNextButton}
        />
    );
  }
}