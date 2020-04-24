import React,{ useState, useEffect } from 'react';
import styled from 'styled-components';
import { getImagesMovieById } from 'services/movie';
import Loading from 'components/Loading';

type Props = {
  label: string,
  movieId: number
}

const ImagesGallery:React.FC<Props> = ({ label, movieId }: Props) => {
  const [images, setImages] = useState({})
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getImagesMovieById(movieId).then(({data}: any) => {
      setImages(data);
      setLoading(false);
    })
  }, [])

  if (loading)
    return <Loading />

  return (
        <Container>
          <Label>{label}</Label>
          
        </Container>
    );
}

const Container = styled.View`
  flex-direction: column;
`;

const Label = styled.Text`
  color: #A9A4A4;
  font-size: 12px;
  font-weight: bold;
`;


export default ImagesGallery;
