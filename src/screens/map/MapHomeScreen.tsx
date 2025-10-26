import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import DrawerButton from '@/components/DrawerButton';

interface MapHomeScreenProps {}

function MapHomeScreen({}: MapHomeScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Map Home Screen</Text>
      <DrawerButton />
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

export default MapHomeScreen;
