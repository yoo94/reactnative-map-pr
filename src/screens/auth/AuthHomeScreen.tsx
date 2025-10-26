import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AuthStackParamList} from '@/types/navigation';
import {StackNavigationProp} from '@react-navigation/stack';

type Navigation = StackNavigationProp<AuthStackParamList>;

function AuthHomeScreen() {
  const navigation = useNavigation<Navigation>();
  return (
    <SafeAreaView>
      <Text onPress={() => navigation.navigate('Login')}>Go to Login</Text>
    </SafeAreaView>
  );
}
export default AuthHomeScreen;
