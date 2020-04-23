import React,{ useState, useEffect } from 'react';
import axios from 'axios';

import Container from 'components/Container';
import VerticalCard from 'components/VerticalCard';
import HorizontalCard from 'components/HorizontalCard';
import Loading from 'components/Loading';
import { Text, View } from 'react-native';

import { getPopularMovies, getUpcomingMovies, getGenreMovies, getPopularTV, getTopRatedTV, getGenreTV } from 'services';

const typeTab = {
  movies: () => [ getUpcomingMovies(), getPopularMovies(), getGenreMovies() ],
  tv: () => [ getPopularTV(), getTopRatedTV(), getGenreTV()]
}

const Dashboard: React.FC = ({ route }) => {
  const { isMovie, title1, title2 } = route.params;
  const [queryHor,setQueryHor] = useState([]);
  const [queryVer,setQueryVer] = useState([]);
  const [genres,setGenres] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    axios.all(isMovie ? typeTab.movies() : typeTab.tv())
      .then(axios.spread((qHor, qVer, genres) => {
        setQueryHor(qHor.data.results);
        setQueryVer(qVer.data.results);  
        setGenres(genres.data.genres);
        setLoading(false);
      }))
      .catch((error) => {
        console.log(error);
        setLoading(false);
      })
  }, [])  

  if (loading)
    return <Loading />

  return (
      <Container>      
        <HorizontalCard title={title1} items={queryHor} />
        <VerticalCard title={title2} genres={genres} items={queryVer} isMovie={true}  />
      </Container>
  );
}


export default Dashboard;