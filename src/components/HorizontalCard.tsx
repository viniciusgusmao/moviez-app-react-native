import React from 'react';
import { FlatList, View } from 'react-native';
import BigCard from 'components/BigCard';
import { TitlePage } from 'components/Common';
import { IBigCard } from 'interfaces';

type Props = {
  items: IBigCard[],
  title: string,
  isMovie: boolean, 
}

const HorizontalCard:React.FC<Props> = ({ items, title, isMovie }: Props) => {

    const _renderItem = ({item}:IBigCard) => <BigCard 
      key={item.id}
      id={item.id} 
      title={item.original_title ? item.original_title : item.original_name}  
      poster_path={item.poster_path} 
      isMovie={isMovie}        
      vote_average={item.vote_average} 
    />

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

