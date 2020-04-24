import React from 'react';
import { ScrollView } from 'react-native';
import BigCard from 'components/BigCard';
import { TitlePage } from 'components/Common';
import { IBigCard } from 'interfaces';

type Props = {
  items: IBigCard[],
  title: string,
  isMovie: boolean, 
}

const HorizontalCard:React.FC<Props> = ({ items, title, isMovie }: Props) => ( 
    <>
      <TitlePage>{title}</TitlePage>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {items?.map((item:IBigCard) => <BigCard 
          key={item.id}
          id={item.id} 
          title={item.original_title ? item.original_title : item.original_name}  
          poster_path={item.poster_path} 
          isMovie={isMovie}        
          vote_average={item.vote_average} 
        />)}
      </ScrollView>
    </>
)


export default HorizontalCard;

