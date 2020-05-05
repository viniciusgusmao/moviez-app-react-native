import React from 'react';
import { View, FlatList } from 'react-native';
import { TitlePage } from './Common';
import { ISmallCard, IGenre } from 'interfaces';
import SmallCard from './SmallCard';
import Line from 'components/Line';

type Props = {
  items: ISmallCard[],
  title: string,
  genres: IGenre[],
  isMovie: boolean,
} 

const VerticalCard: React.FC<Props> = ({ items, title, genres, isMovie }: Props ) => {

    const _renderItem = ({item}:ISmallCard) => <SmallCard 
      key={item.id}
      id={item.id} 
      title={item.original_title ? item.original_title : item.original_name} 
      poster_path={item.poster_path} 
      vote_average={item.vote_average} 
      isMovie={isMovie}          
      genre={genres.filter(item2 => item.genre_ids.includes(item2.id)).map(item => item = item.name).join(', ') }          
    />

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
