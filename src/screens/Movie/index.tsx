import React,{ useEffect, useState } from 'react';

import { MainSection, Section } from 'components/DetailsMovieAndTv';

import { getDynamicDataByUrlParam } from 'services';
import Loading from 'components/Loading';
import { IMovie, IGenre } from 'interfaces';
import { PropsRoute } from 'types';
import BoxItem from 'components/BoxItem';
import Container from 'components/Container';
import ImagesGallery from 'screens/Movie/ImagesGallery';
import VerticalCard from 'components/VerticalCard';
import Header from 'components/DetailsMovieAndTv/Header';

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
      <Header title={item.original_title} backdrop_path={item.backdrop_path} poster_path={item.poster_path}  />
      <MainSection>
        <Section>
          <BoxItem label="Release Date" description={item.release_date} />
          <BoxItem label="Vote Average" description={item.vote_average} />
          <BoxItem label="Length" description={`${item.runtime}min`} />
        </Section>
        <Section>
          <BoxItem label="Genre" description={item.genres.map((item: IGenre) => item = item.name).join(', ')} />
          <BoxItem label="Budget" description={item.budget} isCurrency={true} />
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
