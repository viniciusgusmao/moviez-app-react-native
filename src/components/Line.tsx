import React from 'react';
import styled from 'styled-components';

const Line: React.FC = () => <FullLine />

const FullLine = styled.View`
  width: 100%;
  height: 1px; 
  margin-bottom: 10px;
  background-color: lavender;
`;

export default Line;