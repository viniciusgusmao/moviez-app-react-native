import React from 'react';
import { TitleThumb } from 'components/Common';
import Star from 'components/Star';
import styled from 'styled-components';
import urls from 'res/urls';
import { SubtitleThumb } from 'components/Common';
import { ISmallCard } from 'interfaces';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ImageNotFound from 'components/ImageNotFound';

const SmallCard: React.FC<ISmallCard> = ({ id, poster_path, title, vote_average, genre, isMovie }) => {
  const navigation = useNavigation();
  const screen: string = isMovie ? 'MovieDetails' : 'TVDetails';
  return (
    <TouchableOpacity onPress={() => navigation.navigate({ name: screen, key: id, params: { id } })}>
      <Container>
        {poster_path ? <Poster resizeMode="cover" source={{ uri: `${urls.baseImages}${poster_path}`}} /> : <ImageNotFound width={90} height={120} />}
        <SubContainer>
          <TitleThumb fontSize={16}>{title}</TitleThumb>
          <Star vote_average={vote_average} />
          <SubtitleThumb>{genre}</SubtitleThumb>
        </SubContainer>
      </Container>
    </TouchableOpacity>
  );
}


const Container = styled.View`
  flex-direction: row;
  width: 100%;
  margin-bottom: 12px;
  padding-right: 10px;
  height: 120px;
`;

const SubContainer = styled.View`
  flex-direction: column;
  flex: 1;
  width: 80%;
  height: 70%;
  justify-content: space-between;
`;

const Poster = styled.Image`
  width: 90px;
  height: 120px;
  border-radius: 15px;
  margin-right: 8px;
`;

export default SmallCard;