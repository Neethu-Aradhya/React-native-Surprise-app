import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import PagerView from 'react-native-pager-view';

const Memories = () => {
  return (
    <View style={{ flex: 1 }}>
     <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 30 ,marginTop:50,color:"orange"}}>
        Memorable Moments
      </Text>
      <PagerView style={styles.viewPager} initialPage={0}>
        <View style={styles.page} key="1">
          <Image
            style={{ width: 350, height: 300, marginTop: 30 }}
            source={require('../pics/n1.png')}
          />
          <Text>First page</Text>
          <Text>Swipe ➡️</Text>
        </View>
        <View style={styles.page} key="2">
          <Image
            style={{ width: 350, height: 300, marginTop: 30 }}
            source={require('../pics/n2.png')}
          />
          
             <Text>Swipe ➡️</Text>
        </View>
        <View style={styles.page} key="3">
          <Image
            style={{ width: 350, height: 300, marginTop: 30 }}
            source={require('../pics/n3.png')}
          />
          
             <Text>Swipe ➡️</Text>
        </View>
        <View style={styles.page} key="4">
          <Image
            style={{ width: 350, height: 300, marginTop: 30 }}
            source={require('../pics/n4.png')}
          />
         
             <Text>Swipe ➡️</Text>
        </View>
        
      </PagerView>
      <Text
        style={{
          textAlign: 'center',
          marginTop: 15,
          fontSize: 80,
          color: 'lightgreen',
          fontWeight: 'BOLD',
        }}>
        Amogh
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Memories;
