/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {useRef} from 'react';
import {Animated, Button, Easing, StyleSheet, View} from 'react-native';
import {useAnimation} from '../hooks/useAnimation';

export const Animation101Screen = () => {
  const {opacity, position, fadeIn, fadeOut, startMovingPosition} =
    useAnimation();
  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          opacity,
          marginBottom: 20,
          transform: [{translateY: position}],
        }}
      />
      <Button
        title="Fade In"
        onPress={() => {
          fadeIn();
          startMovingPosition(100);
        }}
      />
      <Button title="Fade Out" onPress={fadeOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    backgroundColor: '#5856d6',
    width: 150,
    height: 150,
  },
});
