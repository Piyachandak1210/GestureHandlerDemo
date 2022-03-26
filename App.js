import React, { Component } from 'react';
import { StyleSheet, View ,Text} from 'react-native';
import FlingGesture from './Componenets/FlingGesture';
import LongPressGesture from './Componenets/LongPressGesture';
import PanGesture from './Componenets/PanGesture';
import PinchToZoom from './Componenets/PinchToZoom';
import PullToRefresh from './Componenets/PullToRefresh';
import SwipeGesture from './Componenets/SwipeGesture';
import TapGesture from './Componenets/TapGesture';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <PanGesture/> */}
      {/* <TapGesture/> */}
      {/* <SwipeGesture/> */}
      {/* <LongPressGesture/> */}
      {/* <PinchToZoom/> */}
      {/* <FlingGesture/> */}
      <PullToRefresh/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});