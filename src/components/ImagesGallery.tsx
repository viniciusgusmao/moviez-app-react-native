import React,{ useState, useEffect } from 'react';
import styled from 'styled-components';
import { getImagesMovieById } from 'services/movie';
import Loading from 'components/Loading';
import { IPhoto } from 'interfaces';
import urls from 'res/urls';

type Props = {
  label: string,
  movieId: number
}

const ImagesGallery:React.FC<Props> = ({ label, movieId }: Props) => {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getImagesMovieById(movieId).then(({data}: any) => {
      setImages(data.backdrops);
      setLoading(false);
    })
  }, [])

  if (loading)
    return <Loading />

  return (
        <Container>
          <Label>{label}</Label>
          <Gallery>
          {images.map((item: IPhoto) => <Photo source={{ uri: `${urls.baseImages}${item.file_path}` }} />)}
          </Gallery>
        </Container>
    );
}

const Photo = styled.Image`
  width: 300px;
  height: 200px;
  margin: 3px;
`;

const Gallery = styled.View`
  flex-wrap: wrap;
  flex: 1;
  width: 100%;
`;

const Container = styled.View`
  flex-direction: column;
`;

const Label = styled.Text`
  color: #A9A4A4;
  font-size: 12px;
  font-weight: bold;
`;


export default ImagesGallery;
