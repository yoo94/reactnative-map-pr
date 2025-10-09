import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

interface FeedListScreenProps {}

function FeedListScreen({}: FeedListScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Feed List Screen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FeedListScreen;
