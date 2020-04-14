import React from 'react';
import { TitleThumb } from '../Common';
import Star from '../Star';
import styled from 'styled-components';
import urls from '../../res/urls';

interface IMainCard {
  id: number,
  poster_path: string,
  title: string,
  vote_average: number
}

const MainCard: React.FC<IMainCard> = ({ id, poster_path, title, vote_average }) => (
    <Container>
      <Poster resizeMode="cover" source={{ uri: `${urls.baseImages}${poster_path}`}} />
      <TitleThumb fontSize={16}>{title.length > 25 ? title.substr(0,25)+'...' : title}</TitleThumb>
      <Star vote_average={vote_average} />
    </Container>
);


const Container = styled.View`
  flex-direction: column;
  width: 140px;
  margin-right: 12px;
`;

const Poster = styled.Image`
  width: 140px;
  height: 200px;
  border-radius: 15px;
`;

export default MainCard;