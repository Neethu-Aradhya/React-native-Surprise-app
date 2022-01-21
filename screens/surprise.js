import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class Surprise extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text
            style={{
              textAlign: 'center',
              marginTop: 80,
              fontSize: 60,
              color: 'orange',
              fontWeight: 'BOLD',
            }}>
            Happy Birthday
          </Text>
          <Image
            style={{ width: 350, height: 400, marginLeft: 10 }}
            source={require('../assets/nisarga.jpg')}
          />
           <Image
            style={{ width: 350, height: 400, marginLeft: 10 ,padding:20,marginTop:30}}
            source={require('../nisuPhoto.jpg')}
          />
          <Text
            style={{
              textAlign: 'center',
              marginTop: 15,
              fontSize: 80,
              color: 'red',
              fontWeight: 'BOLD',
            }}>
            Nisarga
          </Text>

          <Text style={{ textAlign: 'center', fontSize: 27 }}></Text>

          
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Gift')}>
            <Image
              style={{ width: 40, height: 30, marginLeft: 10 }}
              source={{
                uri: 'https://geology.um.edu.my/pic/00-BackButton-150x150.png',
              }}
            />
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  button: {
    width: 200,
    height: 40,
    backgroundColor: '#f4ff',
    justifyContent: 'center',
    marginLeft: 50,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'Bold',
    textAlign: 'center',
  },
});
