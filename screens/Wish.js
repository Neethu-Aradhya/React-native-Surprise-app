import * as React from 'react';
import {
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import * as Speech from 'expo-speech';
import { Video, AVPlaybackStatus } from 'expo-av';

export default class Wish extends React.Component {
  render() {
    const speak = () => {
      const thingToSay = 'Happy Birthday Nisarg';
      Speech.speak(thingToSay);
    };

    return (
      <View style={styles.container}>
        <Button title="Press to hear me" onPress={speak} />
        <Video
          style={styles.video}
          source={{
            uri:
              'https://beatdreamer.com/Happy%20Birthday%20in%20English%20video%202%20HD.mp4',
          }}
          useNativeControls
          resizeMode="contain"
          isLooping
          //onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Photo')}>
          <Text style={styles.buttonText}>Click me</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Memories')}>
          <Image
            style={{ width: 40, height: 30, marginLeft: 10 }}
            source={{
              uri: 'https://geology.um.edu.my/pic/00-BackButton-150x150.png',
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  video: {
    alignSelf: 'center',
    width: 320,
    height: 200,
    marginTop: 50,
  },

  button: {
    width: 200,
    height: 60,
    backgroundColor: '#f4ff',
    justifyContent: 'center',
    marginLeft: 50,
    marginTop: 50,
    borderRadius: 20,
    borderTopWidth: 4,
    borderBottomWidth: 4,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'Bold',
    textAlign: 'center',
  },
});
