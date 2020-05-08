import React,{ useEffect, useState } from 'react';
import { FlatList, View, TouchableOpacity } from 'react-native';
import BigCard from 'components/BigCard';
import { TitlePage } from 'components/Common';
import { IBigCard } from 'interfaces';
import { getDynamicDataByUrlParam } from 'services';
import PlaceholderHorizontal from 'components/Placeholders/PlaceholderHorizontal';
import { MaterialIcons } from '@expo/vector-icons';
import styled from 'styled-components';
import { useNavigation } from '@react-navigation/native';


type Props = {
  title: string,
  isMovie: boolean, 
  url: string,
}

const HorizontalCard:React.FC<Props> = ({ url, title, isMovie }: Props) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false)
  const navigation = useNavigation();

  useEffect(() => {
    setLoading(true);
    console.log(url)
    getDynamicDataByUrlParam(url)
      .then((items_: any) => {
        setItems(items_.data.results);
        setLoading(false);
      })
      .catch((error: any) => {
        setLoading(false);
      })
    },[url])

  const _renderItem = ({item}:IBigCard) => <BigCard 
    key={item.id}
    id={item.id} 
    title={item.title ? item.title : item.name}  
    poster_path={item.poster_path} 
    isMovie={isMovie}        
    vote_average={item.vote_average} 
  />

  if (loading)
    return <PlaceholderHorizontal />

  return (
  <View>
    <Header>
      <TitlePage>{title}</TitlePage>
      <TouchableOpacity onPress={() => navigation.navigate('Search',{ isMovie })  }><MaterialIcons name="search" size={34} color="black" /></TouchableOpacity>
    </Header>
    <FlatList 
      keyExtractor={item => item.id}
      data={items}
      renderItem={_renderItem}
      horizontal={true}
      initialNumToRender={5}
      removeClippedSubviews={true}
      windowSize={5}
    />
  </View>
  );
}

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export default HorizontalCard;

