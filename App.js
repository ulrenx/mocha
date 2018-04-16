import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

import BluetoothScreen from './components/bluetoothInit';
import touchID from './components/touchID';

export default class App extends React.Component {
  render() {
    const MainNavigator = TabNavigator({

      Auth: { screen: touchID },
      Bluetooth: { screen: BluetoothScreen },

    });

    return (
      <View style={styles.container}>
        <MainNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
