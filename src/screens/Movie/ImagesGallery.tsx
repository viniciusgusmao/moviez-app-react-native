import React,{ useState, useEffect } from 'react';
import styled from 'styled-components';
import { getDynamicDataByUrlParam } from 'services';
import Loading from 'components/Loading';
import urls from 'res/urls';
import { Dimensions, Image, FlatList, View, Text } from 'react-native';

const {width} = Dimensions.get('window');
const numberGrid = 3;
const itemWidth = (width-12) / numberGrid;

type Props = {
  label: string,
  movieId: number
}

const ImagesGallery:React.FC<Props> = ({ label, movieId }: Props) => {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDynamicDataByUrlParam(`movie/${movieId}/images`)
      .then(({data}: any) => {
        console.log(data,movieId)
        setImages(data.backdrops);
        setLoading(false);
     })
     .catch((error: string) => {
       console.log(error)
     })
  }, [])

  const renderItem:React.FC = ({item}) => {
    return (<View>
      <Image style={{ width: itemWidth, height: itemWidth, resizeMode: 'cover', borderWidth: 2, borderColor: 'white' }} source={{ uri: `${urls.baseImages}${item.file_path}` }} />
    </View>)
   }

  if (loading)
    return <Loading />
  
  if (images.length == 0)
   return null

  return (
      <View>
        <FlatList
          ListHeaderComponent={() => <Text style={{
            color: '#A9A4A4',
            fontSize: 12,
            fontWeight: 'bold'
          }}>{label}</Text>}          
          keyExtractor={(_, index) => index}
          numColumns={numberGrid} data={images} 
          renderItem={renderItem} 
          initialNumToRender={4}
          removeClippedSubviews={true}
        />
      </View>
    );
}

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
