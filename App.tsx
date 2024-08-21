import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {PopLoader} from './src/presentation/components/loaders/PopLoader';
import AnimatedLoader from './src/presentation/components/loaders/AnimatedLoader';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <PopLoader />
      <AnimatedLoader />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F1F9',
    gap: 100,
  },
});

export default App;
