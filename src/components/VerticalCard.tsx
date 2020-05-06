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
} 

const VerticalCard: React.FC<Props> = ({ title, url, urlGenre, isMovie }: Props ) => {
  const [items, setItems] = useState([]);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    axios.all([getDynamicDataByUrlParam(url), getDynamicDataByUrlParam(urlGenre)])
      .then(axios.spread((items_: any, genres_: any) => {
        setItems(items_.data.results);
        setGenres(genres_.data.genres)
        setLoading(false);
      }))
      .catch((error: any) => {
        console.log(error)
        setLoading(false);
      })
    },[url,urlGenre])

  const _renderItem = ({item}:ISmallCard) => <SmallCard 
    key={item.id}
    id={item.id} 
    title={item.original_title ? item.original_title : item.original_name} 
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
          />
        </View>
    )
};

export default VerticalCard;
