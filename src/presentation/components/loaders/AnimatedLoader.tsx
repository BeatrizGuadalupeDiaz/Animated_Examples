import React, {useRef} from 'react';
import {
  View,
  Animated,
  Easing,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

const AnimatedLoader = () => {
  const value = useRef(new Animated.Value(0)).current;

  const moveBallon = () => {
    Animated.loop(
      Animated.timing(value, {
        toValue: 300,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  };
  const moveBallonBack = () => {
    Animated.loop(
      Animated.timing(value, {
        toValue: 0,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  };
  const stopAnimation = () => {
    Animated.loop(
      Animated.timing(value, {
        toValue: 0,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).stop();
  };

  const rotate = value.interpolate({
    inputRange: [0, 150, 300],
    outputRange: ['0deg', '180deg', '360deg'],
  });
  const backgroundColor = value.interpolate({
    inputRange: [0, 40, 80, 120, 250, 300],
    outputRange: [
      '#FF0000',
      '#FF7F00',
      '#FFFF00',
      '#187518',
      '#0000FF',
      '#8B00FF',
    ],
  });

  return (
    <View>
      <Animated.View
        style={[
          styles.cub,
          {
            transform: [
              {
                translateX: value,
              },
              {
                rotate: rotate,
              },
            ],
            backgroundColor: backgroundColor,
          },
        ]}
      />
      <TouchableOpacity onPress={moveBallon}>
        <Text>Move Ballon</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={moveBallonBack}>
        <Text>Move back Ballon</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={stopAnimation}>
        <Text>STOP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cub: {
    width: 100,
    height: 100,
    backgroundColor: '#3498db',
  },
});

export default AnimatedLoader;
