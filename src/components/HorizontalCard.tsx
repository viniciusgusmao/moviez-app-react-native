import React,{ useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import BigCard from 'components/BigCard';
import { TitlePage } from 'components/Common';
import { IBigCard } from 'interfaces';
import { getDynamicDataByUrlParam } from 'services';
import PlaceholderHorizontal from 'components/PlaceholderHorizontal';

type Props = {
  title: string,
  isMovie: boolean, 
  url: string,
}

const HorizontalCard:React.FC<Props> = ({ url, title, isMovie }: Props) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false)

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
    title={item.original_title ? item.original_title : item.original_name}  
    poster_path={item.poster_path} 
    isMovie={isMovie}        
    vote_average={item.vote_average} 
  />

  if (loading)
    return <PlaceholderHorizontal />

  return (
  <View>
    <TitlePage>{title}</TitlePage>
    <FlatList 
      keyExtractor={item => item.id}
      data={items}
      renderItem={_renderItem}
      horizontal={true}
    />
  </View>
  );
}


export default HorizontalCard;

