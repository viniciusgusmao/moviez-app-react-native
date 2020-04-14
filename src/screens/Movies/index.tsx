import React from 'react';
import Container from '../../components/Container';
import useFetchApi from '../../hooks/useFetchApi';
import Popular from './Popular';
import TopRated from './TopRated';

const MovieScreen: React.FC = () => {
  const { queryHighlight, errorQueryHighlight, querySecondary, errorQuerySecondary } = useFetchApi('/movie/popular','/movie/top_rated');
  return (
    <Container>      
      <Popular queryHighlight={queryHighlight} errorQueryHighlight={errorQueryHighlight}  />
      <TopRated querySecondary={querySecondary} errorQuerySecondary={errorQuerySecondary}  />
    </Container>
  );
}

export default MovieScreen;