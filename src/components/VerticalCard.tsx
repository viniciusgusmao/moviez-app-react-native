import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { TitlePage } from './Common';
import { ISmallCard } from 'interfaces';
import SmallCard from './SmallCard';
import Line from 'components/Line';
import { getDynamicDataByUrlParam } from 'services';
import axios from 'axios';
import PlaceholderVertical from 'components/Placeholders/PlaceholderVertical';


type Props = {
  url: string,
  title: string,
  urlGenre: string,
  isMovie: boolean,
  query?: string | null
} 

const VerticalCard: React.FC<Props> = ({ title, url, urlGenre, isMovie, query = null }: Props ) => {
  const [items, setItems] = useState([]);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    axios.all([getDynamicDataByUrlParam(url,query), getDynamicDataByUrlParam(urlGenre)])
      .then(axios.spread((items_: any, genres_: any) => {
        setItems(items_.data.results);
        setGenres(genres_.data.genres)
        setLoading(false);
      }))
      .catch((error: any) => {
        console.log(error)
        setLoading(false);
      })
      
    },[url,urlGenre,query])

  const _renderItem = ({item}:ISmallCard) => <SmallCard 
    key={item.id}
    id={item.id} 
    title={item.title ? item.title : item.name} 
    poster_path={item.poster_path} 
    vote_average={item.vote_average} 
    isMovie={isMovie}          
    genre={genres.filter(item2 => item.genre_ids.includes(item2.id)).map(item => item = item.name).join(', ') }          
  />

  if (loading)
    return <PlaceholderVertical />

  if (items.length == 0)
    return null;  

  return (
        <View>
          <FlatList 
            ListHeaderComponent={() => <TitlePage marginTop={15}>{title}</TitlePage> }
            data={items}
            ItemSeparatorComponent={() => <Line />}
            renderItem={_renderItem}
            keyExtractor={item => item.id}
            initialNumToRender={5}
            maxToRenderPerBatch={5}
            removeClippedSubviews={true}
            getItemLayout={(data, index) => (
              {length: 120, offset: 120 * index, index}
            )}
            windowSize={5}
          />
        </View>
    )
};

export default VerticalCard;
