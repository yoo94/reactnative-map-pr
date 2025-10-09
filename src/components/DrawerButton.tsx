import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable } from 'react-native';
import { Text } from 'react-native-gesture-handler';

function DrawerButton() {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => {
        navigation.openDrawer();
      }}
    >
      <Text style={{ fontSize: 20 }}>서랍</Text>
    </Pressable>
  );
}

export default DrawerButton;
