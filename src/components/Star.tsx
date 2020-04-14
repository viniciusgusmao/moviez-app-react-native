import React from 'react';
import { View } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import colors from '../res/colors';

import styled from 'styled-components';

interface IStar {
  vote_average: number
}

const Star: React.FC<IStar> = () => (
    <Container>
      <AntDesign name="star" size={20} color={colors.yellow} />
      <AntDesign name="star" size={20} color={colors.yellow} />
      <AntDesign name="star" size={20} color={colors.yellow} />
      <AntDesign name="star" size={20} color={colors.yellow} />
      <AntDesign name="star" size={20} color={colors.yellow} />
    </Container>
);

const Container = styled.View`
  flex: 1;
  flex-direction: row;
`;

export default Star;
