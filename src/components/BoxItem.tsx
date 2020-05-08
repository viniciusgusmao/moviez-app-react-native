import React from 'react';
import styled from 'styled-components';
import NumberFormat from 'react-number-format';

type Props = {
  label: string,
  description: string,
  isCurrency?: boolean
}

const BoxItem:React.FC<Props> = ({ label, description, isCurrency = false }: Props) => (
    <Container>
      <Label>{label}</Label>
      {!isCurrency ? <Description>{description}</Description> : <NumberFormat decimalSeparator="," value={description} displayType={'text'} thousandSeparator="." prefix={'$'} renderText={(value) => <Description>{value}</Description>}  />}
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
