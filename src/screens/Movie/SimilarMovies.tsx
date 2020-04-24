import React,{ useEffect, useState } from 'react';
import { getSimilarMoviesById } from 'services/movie';
import Loading from 'components/Loading';
import { View } from 'react-native';
import VerticalCard from 'components/VerticalCard';
import { IGenre } from 'interfaces';

type Props = {
  movieId: number,
  genres: IGenre[]
}

const SimilarMovies:React.FC<Props> = ({ movieId, genres }:Props) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSimilarMoviesById(movieId).then(({data}: any) => {
      setItems(data.results);
      setLoading(false);
    })
  }, [movieId])

  if (loading)
    return <Loading />

  if (items.length == 0)
    return null;
    
  return (
    <View>
      <VerticalCard title="Similar Movies" genres={genres} items={items} isMovie={true} />
    </View>
  );
}

export default SimilarMovies;
