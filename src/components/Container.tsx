import React from 'react';
import { View } from 'react-native';
import {AfterInteractions} from 'react-native-interactions';
import styled from 'styled-components';
import Constants from 'expo-constants';

const Container: React.FC = ({ children }) => {
  return (
    <AfterInteractions>
      <MyContainer contentContainerStyle={{
        marginTop: Constants.statusBarHeight,
        padding: 15
      }}>
        {children}
      </MyContainer>
    </AfterInteractions>
  );
}

const MyContainer = styled.ScrollView`
  flex: 1;
  background-color: white;
`;

export default Container;
