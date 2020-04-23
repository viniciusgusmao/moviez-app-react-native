import React from 'react';
import {AfterInteractions} from 'react-native-interactions';
import styled from 'styled-components';
import Constants from 'expo-constants';

type Props = {
  children: React.ReactNode,
  padding?: number
} 

const Container: React.FC<Props> = ({ children, padding }: Props) => {
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
