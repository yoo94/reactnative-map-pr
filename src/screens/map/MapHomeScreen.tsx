import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import DrawerButton from '@/components/DrawerButton';
import useAuth from '@/hooks/quries/useAuth';

interface MapHomeScreenProps {}

function MapHomeScreen({}: MapHomeScreenProps) {
  const {logoutMutation} = useAuth();
  return (
    <SafeAreaView style={styles.container}>
      <Text>Map Home Screen</Text>
      <DrawerButton />
      <Text onPress={() => {}}>지도 화면입니다.</Text>
      <Text onPress={() => logoutMutation.mutate(null)}>로그아웃</Text>
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
