import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
 
  import { Avatar, ListItem } from 'react-native-elements';
// You can import from local files


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function Profile() {
  return (
    <View style={styles.container}>
    

<Avatar
  rounded
  source={{
    uri:
      'https://static.scientificamerican.com/blogs/cache/file/1D4440C5-CD59-4A53-A23648FF2C7CD0DD_source.jpg?w=590&h=800&B9BBE026-DB91-4291-B39DC8D859778498',
  }}
/>
<Avatar
  size="large"
  rounded title="Neethu"
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
/>


<Avatar
  size="large"
  icon={{name: 'rocket', color: 'orange', type: 'font-awesome'}}
  overlayContainerStyle={{backgroundColor: 'white'}}
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
  containerStyle={{flex: 4, marginTop: 75}}
/>
// Avatar with Title
<Avatar rounded title="MD" />

// Avatar with Icon
<Avatar rounded icon={{ name: 'home' }} />

// Standard Avatar with accessory
<Avatar
  source={{
    uri:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
  }}
  >
  
</Avatar>

      <Card>
        
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
