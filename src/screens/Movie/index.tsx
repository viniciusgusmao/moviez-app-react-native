import React,{ useEffect, useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { MainSection, SectionButton, Section, BackdropImage, ButtonHeader, TitleDetailPage } from 'components/DetailsMovieAndTv';

import { getDynamicDataByUrlParam } from 'services';
import PlaceholderDetailMovie from 'components/Placeholders/PlaceholderDetailMovie';
import Loading from 'components/Loading';
import { IMovie, IGenre } from 'interfaces';
import { PropsRoute } from 'types';
import urls from 'res/urls';
import BoxItem from 'components/BoxItem';
import Container from 'components/Container';
import ImagesGallery from 'screens/Movie/ImagesGallery';
import VerticalCard from 'components/VerticalCard';

const Movie:React.FC<IMovie> = ({ route, navigation }: PropsRoute) => {
  const [item, setItem] = useState<IMovie>({})
  const { id } = route.params;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDynamicDataByUrlParam(`movie/${id}`)
      .then(({data}: IMovie) => {
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
        <TitleDetailPage style={{
          textShadowColor: 'dimgray',
          textShadowOffset: {
            width: 1,
            height: 1
          },
          textShadowRadius: 1
        }}>{item.original_title}</TitleDetailPage>
      </BackdropImage>
      <MainSection>
        <Section>
          <BoxItem label="Release Date" description={item.release_date} />
          <BoxItem label="Vote Average" description={item.vote_average} />
          <BoxItem label="Length" description={`${item.runtime}min`} />
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

        <VerticalCard title="Similar Movies" url={`movie/${id}/similar`} urlGenre="genre/movie/list" isMovie={true} />
      </MainSection>
    </Container>
  );
};
export default Movie;
