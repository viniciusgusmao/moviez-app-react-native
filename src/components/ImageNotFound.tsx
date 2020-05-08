import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';

type Props = {
  width: number,
  height: number
}

const ImageNotFound: React.FC<Props> = ({ width = 80, height = 120 }:Props) => {
  return <NoImage width={width} height={height}>
    <Text style={{ fontSize: 12, textAlign: "center", color: 'silver' }}>Image not found</Text>
  </NoImage>
}

const NoImage = styled.View`
  width:${(props:Props) => `${props.width}px`};
  height:${(props:Props) => `${props.height}px`};
  margin-right: 6px;
  background-color: whitesmoke;
  justify-content: center;
  align-content: center;
  border-radius: 15px;
  padding: 4px;
`;

export default ImageNotFound;