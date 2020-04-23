import React, { useState, useEffect } from 'react';
import Container from 'components/Container';
import { getMovieById, getTvById } from 'services';
import { Text } from 'react-native';
import { PropsRoute } from 'types';
import Loading from 'components/Loading';
import { IMovie } from 'interfaces';

const Details:React.FC = ({ route }: PropsRoute) => {
  const [item, setItem] = useState({})
  const { id, isMovie } = route.params;
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (isMovie)
      getMovieById(id).then((response: IMovie) => {
        setItem(response.data);
        setLoading(false);
      })
      .catch((error: string) => console.log(error))
    else
      getTvById(id).then((response: IMovie) => { 
        setItem(response.data);
        setLoading(false);
      })
      .catch((error: string) => console.log(error))
  },[id, isMovie])

  if (loading)
    return <Loading />

  return (
    <Container padding={0}>
      <Text>{item?.original_title}</Text>
    </Container>
  );
}

export default Details;
