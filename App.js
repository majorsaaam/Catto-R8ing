import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Cat from './components/cat';

const styles = StyleSheet.create({
  container: {
      flex: 1
  }
})

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Cat />
    </SafeAreaView>
  );
}

export default App