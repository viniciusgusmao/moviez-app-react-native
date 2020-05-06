import React from 'react';
import styled from 'styled-components';

type Props = {
  label: string,
  description: string
}

const BoxItem:React.FC<Props> = ({ label, description }: Props) => (
    <Container>
      <Label>{label}</Label>
      <Description>{description}</Description>
    </Container>
);

const Container = styled.View`
  flex-direction: column;
  flex: 1; 
`;

const Label = styled.Text`
  color: #A9A4A4;
  font-size: 12px;
  font-weight: bold;
`;

const Description = styled.Text`
  color: #4B4A4A;
  font-size: 14px;
`;

export default BoxItem;
