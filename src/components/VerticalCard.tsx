import React from 'react';
import { View } from 'react-native';
import { TitlePage } from './Common';
import { ISmallCard, IGenre } from 'interfaces';
import SmallCard from './SmallCard';

type Props = {
  items: ISmallCard[],
  title: string,
  genres: IGenre[],
  isMovie: boolean,
} 

const VerticalCard: React.FC<Props> = ({ items, title, genres, isMovie }: Props ) => (
    <>
      <TitlePage marginTop={15}>{title}</TitlePage>
      <View>
        {items?.map((item_:ISmallCard) => <SmallCard 
          key={item_.id}
          id={item_.id} 
          title={item_.original_title ? item_.original_title : item_.original_name} 
          poster_path={item_.poster_path} 
          vote_average={item_.vote_average} 
          isMovie={isMovie}          
          genre={genres.filter(item => item_.genre_ids.includes(item.id)).map(item => item = item.name).join(', ') }          
        />)}
      </View>
    </>
);

export default VerticalCard;
