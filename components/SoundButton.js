import * as React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

export default class SoundButton extends React.Component {
  playSound = async (soundChunk) => {
    var soundLink =
      'https://whitehatjrcontent.s3.ap-south-1.amazonaws.com/phones/' +
      soundChunk +
      '.mp3';
    await Audio.Sound.createAsync(
      {
        uri: soundLink,
      },
      { shouldPlay: true }
    );
  };
  render() {
    return (
      <TouchableOpacity
        style={styles.chunkButton}
        onPress={() => {
          this.playSound(this.props.soundChunk);
        }}>
        <Text style={styles.displayText}>{this.props.wordChunk}</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  displayText: {
    textAlign: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    color: 'black',
  },
  chunkButton: {
    width: '40%',
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'orange',
    borderRadius: 20,
    margin: 5,
  },
})