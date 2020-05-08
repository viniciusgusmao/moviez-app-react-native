import React,{ useEffect, useState } from 'react';

import { getDynamicDataByUrlParam } from 'services';
import Loading from 'components/Loading';
import { ITv, IGenre } from 'interfaces';
import { PropsRoute } from 'types';
import urls from 'res/urls';
import BoxItem from 'components/BoxItem';
import Container from 'components/Container';
import VerticalCard from 'components/VerticalCard';
import Seasons from 'screens/TV/Seasons';

import { MainSection, Section} from 'components/DetailsMovieAndTv';
import Header from 'components/DetailsMovieAndTv/Header';

const Tv:React.FC<ITv> = ({ route }: PropsRoute) => {
  const [item, setItem] = useState<ITv>({})
  const { id } = route.params;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDynamicDataByUrlParam(`tv/${id}`)
      .then(({data}: ITv) => {
        setItem(data);
        setLoading(false);
     })
  }, [])

  if (loading)
    return <Loading />

  return (
    <Container padding={0}>    
      <Header title={item.name} backdrop_path={item.backdrop_path} poster_path={item.poster_path}  />
      <MainSection>
        <Section>
          <BoxItem label="First air date" description={item.first_air_date} />
          <BoxItem label="Vote Average" description={item.vote_average} />
          <BoxItem label="N° Seasons" description={item.number_of_seasons} />
        </Section>
        <Section>
          <BoxItem label="Genre" description={item.genres.map((item: IGenre) => item = item.name).join(', ')} />
          <BoxItem label="Status" description={item.status} />
        </Section>
        <Section>
          <BoxItem label="Overview" description={item.overview} />
        </Section>
        <Section>
          <Seasons data={item.seasons} />
        </Section>        
        <VerticalCard title="Similar TV Shows" url={`tv/${id}/similar`} urlGenre="genre/tv/list" isMovie={false} />
      </MainSection>
    </Container>
  );
};



export default Tv;
