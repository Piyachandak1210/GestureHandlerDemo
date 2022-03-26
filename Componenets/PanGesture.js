import React, { Component } from 'react';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { Animated, Text ,StatusBar} from 'react-native';
import { styles } from '../style';
export default class PanGesture extends Component {
  translateX = new Animated.Value(0);
  translateY = new Animated.Value(0);
  onPanGestureEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationX: this.translateX,
          translationY: this.translateY,
        },
      },
    ],
    { useNativeDriver: true }
  );

  render() {
    return (
      <>
        <Text>Pan Gesture Handler</Text>
        <PanGestureHandler onGestureEvent={this.onPanGestureEvent}>
          <Animated.View
            style={[
              styles.square,
              {
                transform: [
                  {
                    translateX: this.translateX,
                  },
                  {
                    translateY: this.translateY,
                  },
                ],
              },
            ]}
          />
        </PanGestureHandler>
        {/* <StatusBar style="auto" /> */}
      </>
    );
  }
}