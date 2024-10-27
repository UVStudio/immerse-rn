import React from 'react';
import {StyleSheet, SafeAreaView, Text, View} from 'react-native';

export function ImmerseScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.default}>
        <Text>Immerse!</Text>
      </View>
    </SafeAreaView>
  );
}

export function ContentScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.default}>
        <Text>Content Screen!</Text>
      </View>
    </SafeAreaView>
  );
}

export function FlashCardScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.default}>
        <Text>Flash Card!</Text>
      </View>
    </SafeAreaView>
  );
}

export function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.default}>
        <Text>Profile!</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  default: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
});
