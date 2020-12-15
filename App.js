import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Header } from 'react-native-elements';
import db from './localdb';
import SoundButton from './components/SoundButton';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { text: '', chunks: [], phonicSounds: [] };
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'#e2b3a4'}
          centerComponent={{
            text: 'Monkey chunky',
            style: { color: 'red', fontSize: 20 },
          }}
        />
        <Image
          style={styles.icon}
          source={{
            uri:
              'https://ciklopea.com/wp-content/uploads/2017/07/translator.jpg',
          }}></Image>
        <TextInput
          style={styles.inputbox}
          onChangeText={(text) => {
            this.setState({ text: text });
          }}
        />
        <TouchableOpacity
          style={styles.readButton}
          onPress={() => {
            this.setState({ chunks: db[this.state.text].chunks });
            this.setState({ phonicSounds: db[this.state.text].phones });
          }}>
          <Text style={styles.buttonText}>Read</Text>
        </TouchableOpacity>
        <View>
          {this.state.chunks.map((item, index) => {
            return (
              <SoundButton
                wordChunk={this.state.chunks[index]}
                soundChunk={this.state.phonicSounds[index]}
              />
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputbox: {
    marginTop: 30,
    textAlign: 'center',
    width: '60%',
    height: 40,
    borderWidth: 4,
    alignSelf: 'center',
    backgroundColor: '#fd2c2e',
    borderRadius: 20,
  },
  readButton: {
    marginTop: 20,
    textAlign: 'center',
    width: '50%',
    height: 50,
    alignSelf: 'center',
    backgroundColor: 'yellow',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 15,
    alignSelf: 'center',
  },
  icon: {
    width: 150,
    height: 150,
    marginTop: 20,
    marginLeft: 100,
  },
});
