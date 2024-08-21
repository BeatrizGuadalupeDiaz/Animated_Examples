import {Animated, Easing, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef} from 'react';

const Loader = ({offset}: any) => {
  const y = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const total = 1000;
    const bump = 200;

    const animation = Animated.loop(
      Animated.sequence([
        Animated.delay(offset * bump),
        Animated.timing(y, {
          toValue: 10,
          duration: bump,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(y, {
          toValue: 0,
          duration: bump,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.delay(total - bump * 2 - bump * offset),
      ]),
    );
    animation.start();
    return () => animation.stop();
  });

  const translateY = y.interpolate({
    inputRange: [0, 5, 10],
    outputRange: [0, -15, -30],
  });
  const backgroundColor = y.interpolate({
    inputRange: [0, 2, 4, 6, 8, 10],
    outputRange: [
      '#8A2BE2',
      '#6A5ACD',
      '#7B68EE',
      '#6495ED',
      '#4169E1',
      '#1E90FF',
    ],
  });

  const stylesView = {
    transform: [{translateY}],
    backgroundColor: backgroundColor,
    width: 30,
    height: 30,
    borderRadius: 90,
  };
  return <Animated.View style={stylesView} />;
};

export const PopLoader = () => {
  return (
    <>
      <Text style={styles.text}>Espere mientras cargan los datos</Text>
      <View style={styles.contentLoader}>
        <Loader offset={0} />
        <Loader offset={1} />
        <Loader offset={2} />
        <Loader offset={3} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6A5ACD',
    marginHorizontal: 90,
    textAlign: 'center',
  },
  contentLoader: {flexDirection: 'row', gap: 10},
});
