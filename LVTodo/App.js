import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Button } from 'react-native-elements'
import Constants from 'expo-constants';

export default function App() {
  return ([
    <View key='t' style={styles.bar}>
    </View>,
    <View key='b' style={styles.top}>
      <View style={styles.leftalign}>
        <Button title="B" type="clear"/>
      </View>
      <View style={styles.rightalign}>
        <Button title="C" type="clear"/>
      </View>
    </View>,
    <View key='a' style={styles.container}>
      <FlatList data={DATA} renderItem={({item}) => <Text> {item.id} </Text>}/>
    </View>
  ]);
}

var DATA = [{id: '449', title: 'yes'}, {id: '450', title: 'no'}]

const styles = StyleSheet.create({
  container: {
    flex: 11,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  top: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f00',
    alignItems: 'center',
    justifyContent: 'center',
    height: '8%',
  },
  leftalign: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  rightalign: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  bar: {
    backgroundColor: "#f00",
    height: Constants.statusBarHeight,
  }
});
