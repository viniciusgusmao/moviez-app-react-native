import React from 'react';
import { ScrollView } from 'react-native';
import BigCard from '../../components/BigCard';
import ErrorApi from '../../components/ErrorApi';
import { TitlePage } from '../../components/Common';
import { IBigCard } from '../../interfaces';

type PropsPopular = {
  queryHighlight: IBigCard[],
  errorQueryHighlight: string
}

const Popular:React.FC<PropsPopular> = ({ queryHighlight, errorQueryHighlight }) => (
    <>
      <TitlePage>Popular</TitlePage>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {queryHighlight?.map((movie:IBigCard) => <BigCard 
          key={movie.id}
          id={movie.id} 
          title={movie.title} 
          poster_path={movie.poster_path} 
          vote_average={movie.vote_average} 
        />)}
      </ScrollView>
      {errorQueryHighlight != '' && <ErrorApi>{errorQueryHighlight}</ErrorApi>} 
    </>
);

export default Popular;

