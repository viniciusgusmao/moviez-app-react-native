import React,{ useEffect, useState } from 'react';
import { Dimensions, ScrollView } from 'react-native';
import styled from 'styled-components';
import { MaterialIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';

import { getMovieById } from 'services/movie';
import Loading from 'components/Loading';
import { IMovie, IGenre } from 'interfaces';
import { PropsRoute } from 'types';
import urls from 'res/urls';
import BoxItem from 'components/BoxItem';
import ImagesGallery from 'components/ImagesGallery';

const Movie:React.FC<IMovie> = ({ route, navigation }: PropsRoute) => {
  const [item, setItem] = useState<IMovie>({})
  const { id } = route.params;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMovieById(id).then(({data}: IMovie) => {
      setItem(data);
      setLoading(false);
    })
  }, [])

  if (loading)
    return <Loading />

  return (
    <ScrollView contentContainerStyle={{
      flex: 1
    }}>
      <BackdropImage imageStyle={{ resizeMode: 'cover' }} source={{ uri: `${urls.baseImages}${item.backdrop_path}` }} >
        <BackButton onPress={() => navigation.goBack() }>
          <MaterialIcons name="arrow-back" size={34} color="white" />
        </BackButton>
        <Title style={{
          textShadowColor: 'dimgray',
          textShadowOffset: {
            width: 1,
            height: 1
          },
          textShadowRadius: 1
        }}>{item.original_title}</Title>
      </BackdropImage>
      <Container>
        <Section>
          <BoxItem label="Release Date" description={item.release_date} />
          <BoxItem label="Vote Average" description={item.vote_average} />
          <BoxItem label="Length" description={item.runtime} />
        </Section>
        <Section>
          <BoxItem label="Genre" description={item.genres.map((item: IGenre) => item = item.name).join(', ')} />
          <BoxItem label="Budget" description={item.budget} />
        </Section>
        <Section>
          <BoxItem label="Overview" description={item.overview} />
        </Section>
        <Section>
          <ImagesGallery label="More Images" movieId={id} />
        </Section>
      </Container>
    </ScrollView>
  );
};

const Section = styled.View`
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 15px;
`;

const Container = styled.View`
  margin: 15px;
`;

const BackdropImage = styled.ImageBackground`
  width: 100%;
  height: ${`${Dimensions.get('window').height*0.45}px`};
  padding: 10px;
  justify-content: space-between;
`;

const BackButton = styled.TouchableOpacity`
  margin-top: ${`${Constants.statusBarHeight}px`};
`;

const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 38px;
  margin-bottom: 20px;

`;

export default Movie;
