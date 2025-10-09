import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

interface AuthHomeScreenProps {}

function AuthHomeScreen({}: AuthHomeScreenProps) {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Text onPress={() => navigation.navigate('Login')}>Go to Login</Text>
    </SafeAreaView>
  );
}
export default AuthHomeScreen;
