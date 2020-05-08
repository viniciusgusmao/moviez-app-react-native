import React from 'react';
import { TitleThumb } from 'components/Common';
import Star from 'components/Star';
import styled from 'styled-components';
import urls from 'res/urls';
import { IBigCard } from 'interfaces';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ImageNotFound from 'components/ImageNotFound';

const BigCard: React.FC<IBigCard> = ({ id, poster_path, title, vote_average, isMovie }) => {
  const navigation = useNavigation();
  const screen: string = isMovie ? 'MovieDetails' : 'TVDetails';
  return (
    <TouchableOpacity onPress={() => navigation.navigate({ name: screen, key: id, params: { id } })}>
      <Container>
        {poster_path ? <Poster resizeMode="cover" source={{ uri: `${urls.baseImages}${poster_path}`}} /> : <ImageNotFound width={140} height={200} />}
        <TitleThumb fontSize={16}>{title.length > 25 ? title.substr(0,25)+'...' : title}</TitleThumb>
        <Star vote_average={vote_average} />
      </Container>
    </TouchableOpacity>
  );
}

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

export default BigCard;