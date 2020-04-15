import React,{ useState, useEffect } from 'react';
import Container from 'components/Container';
import Popular from 'screens/Movies/Popular';
import TopRated from 'screens/Movies/TopRated';
import Loading from 'components/Loading';
import { getPopularTV, getTopRatedTV } from 'services';
import axios from 'axios';

const TvScreen: React.FC = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.all([ getPopularTV(), getTopRatedTV()])
      .then(axios.spread((popular, top_rated) => {
        setPopularMovies(popular.data.results);
        setTopRatedMovies(top_rated.data.results);
        setLoading(false);
      }))
      .catch((error) => {
        setLoading(false);
      })
  }, [])

  if (loading)
    return <Loading />

  return (
      <Container>      
        <Popular movies={popularMovies} />
        <TopRated movies={topRatedMovies}  />
      </Container>
  );
}


export default TvScreen;