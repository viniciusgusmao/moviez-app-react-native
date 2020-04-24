import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import {AfterInteractions} from 'react-native-interactions';
import Constants from 'expo-constants';


type Props = {
  children: React.ReactNode,
  padding?: number
} 

const Container: React.FC<Props> = ({ children, padding = 15 }: Props) => {
  return (
    <AfterInteractions>
      <SafeAreaView style={{
        flex: 1,
        marginTop: Constants.statusBarHeight,
      }}>
        <ScrollView contentContainerStyle={{
          padding,
          backgroundColor: 'white'
        }}>
          {children}
        </ScrollView>
      </SafeAreaView>
    </AfterInteractions>
  );
}


export default Container;
