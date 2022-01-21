import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Button,Alert
} from 'react-native';
import Constants from 'expo-constants';

import * as Speech from 'expo-speech';



export default class Gift extends React.Component {
  constructor() {
    super();
    this.state = {
     
      name: '',
    };
  }


speak = () => {
    var thingToSay = this.state.name;
    var say = 'hello';
    var sur = "you have a surprise"
    Speech.speak(say);
    Speech.speak(thingToSay);
    Speech.speak(sur);
  };


  render() {
    return (
      <View style={styles.container}>
          <ScrollView>
    <ImageBackground
             style={styles.backgroundImage}
              source={require("../assets/stars.gif")}
            >
    
          <TextInput
            style={styles.textInput}
            placeholder="Enter your name"
            placeholderTextColor="#800000"
            onChangeText={(text) => {
            this.setState({ name: text });
          }}
          value={this.state.text}
          />

          <TouchableOpacity
            style={styles.helloButton}
            onPress={this.speak}  >
            <Text
              style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 30 ,color:' #2E4053'}}>
              Say Hello
            </Text>
          </TouchableOpacity>

          <Text
            style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 30,color:"#00FF00",marginTop:30 }}>
            click on below gift to See the Suprise
          </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('TabNavigator')}>
            <Image
             style={{width:150,height:150,alignSelf:"center",marginTop:50}}
              source={{
                uri: 'https://c.tenor.com/t7aI5VVWTvwAAAAM/gift-christmas-gift.gif',
              }}
            />
          </TouchableOpacity>
       
        </ImageBackground>
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
    //backgroundColor: '#AED6F1',
    padding: 8,
  },
  textInput: {
    backgroundColor: '#999999',
    borderRadius: 10,
    padding: 10,

    marginTop: 150,
    marginLeft:10
  },
  helloButton: {
    backgroundColor: '#FFFF00',
    padding: 5,
    alignSelf:"center",
    borderRadius: 10,
    marginTop: 25,
    width: 200,
    
  },
  backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        height:800
    }
});

