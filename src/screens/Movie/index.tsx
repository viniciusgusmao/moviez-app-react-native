import React,{ useEffect, useState } from 'react';
import { Dimensions, View } from 'react-native';
import styled from 'styled-components';
import { MaterialIcons } from '@expo/vector-icons';

import { getMovieById } from 'services/movie';
import Loading from 'components/Loading';
import { IMovie, IGenre } from 'interfaces';
import { PropsRoute } from 'types';
import urls from 'res/urls';
import BoxItem from 'components/BoxItem';
import Container from 'components/Container';
import ImagesGallery from 'screens/Movie/ImagesGallery';
import SimilarMovies from 'screens/Movie/SimilarMovies';

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
    <Container padding={0}>    
      <BackdropImage imageStyle={{ resizeMode: 'cover' }} source={{ uri: `${urls.baseImages}${item.backdrop_path ? item.backdrop_path : item.poster_path }` }} >
        <SectionButton>
          <ButtonHeader onPress={() => navigation.goBack() }>
            <MaterialIcons name="arrow-back" size={34} color="white" />
          </ButtonHeader>
          <ButtonHeader onPress={() => navigation.navigate('Home') }>
            <MaterialIcons name="home" size={34} color="white" />
          </ButtonHeader>
        </SectionButton>
        <Title style={{
          textShadowColor: 'dimgray',
          textShadowOffset: {
            width: 1,
            height: 1
          },
          textShadowRadius: 1
        }}>{item.original_title}</Title>
      </BackdropImage>
      <MainSection>
        <Section>
          <BoxItem label="Release Date" description={item.release_date} />
          <BoxItem label="Vote Average" description={item.vote_average} />
          <BoxItem label="Length" description={`${item.runtime}min`} />
        </Section>
        <Section>
          <BoxItem label="Genre" description={item.genres.map((item: IGenre) => item = item.name).join(', ')} />
          <BoxItem label="Budget" description={`$${item.budget}`} />
        </Section>
        <Section>
          <BoxItem label="Overview" description={item.overview} />
        </Section>
        <Section>
          <ImagesGallery label="More Images" movieId={id} />
        </Section>
        <SimilarMovies movieId={id} genres={item.genres} />
      </MainSection>
    </Container>
  );
};

const MainSection = styled.View`
  padding: 10px;
`;

const SectionButton = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Section = styled.View`
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 15px;
`;

const BackdropImage = styled.ImageBackground`
  width: 100%;
  height: ${`${Dimensions.get('window').height*0.45}px`};
  padding: 10px;
  justify-content: space-between;
`;

const ButtonHeader = styled.TouchableOpacity`
  background-color: dimgray;
  width: 40px;
  border-radius: 20px;
  padding: 3px;
`;

const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 38px;
  margin-bottom: 20px;

`;

export default Movie;
