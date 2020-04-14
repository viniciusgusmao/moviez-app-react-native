import React, { useEffect, useState } from 'react';
import Container from '../../components/Container';
import styled from 'styled-components';
import { TitlePage } from '../../components/Common';
import MainCard from '../../components/MainCard';
import api from '../../config/axios';

interface IMainCard {
  id: number,
  poster_path: string,
  title: string,
  vote_average: number
}

const MovieScreen: React.FC = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  
  useEffect(() => {
    api.get('/movie/popular', {
      params: {
        api_key: '63c15a307d34c29832b78c44c08418d1',
        page: 1
      }
    }).then((res: any) => {
      setPopularMovies(res.data.results);
    }).catch((error: any) => {
    })
  }, [])

  useEffect(() => {
    api.get('/movie/top_rated', {
      params: {
        api_key: '63c15a307d34c29832b78c44c08418d1',
        page: 1
      }
    }).then((res: any) => {
      setPopularMovies(res.data.results);
    }).catch((error: any) => {
    })
  }, [])

  return (
    <Container>
      <TitlePage>Popular</TitlePage>
      <ContainerHorizontal horizontal={true}>
        {popularMovies?.map((movie:IMainCard) => <MainCard 
          key={movie.id}
          id={movie.id} 
          title={movie.title} 
          poster_path={movie.poster_path} 
          vote_average={movie.vote_average} 
        />)}      
      </ContainerHorizontal>
      <TitlePage>Top Rated</TitlePage>
    </Container>
  );
}

const ContainerHorizontal = styled.ScrollView`
  flex: 1;
`;

export default MovieScreen;