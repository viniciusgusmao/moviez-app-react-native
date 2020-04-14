import React from 'react';
import { View } from 'react-native';
import { TitlePage } from '../../components/Common';
import { ISmallCard } from '../../interfaces';
import ErrorApi from '../../components/ErrorApi';
import SmallCard from '../../components/SmallCard';

type PropsTopRated = {
  querySecondary: ISmallCard[],
  errorQuerySecondary: string
}

const TopRated: React.FC<PropsTopRated> = ({ querySecondary, errorQuerySecondary } ) => 
    (
    <>
      <TitlePage marginTop={15}>Top Rated</TitlePage>
      <View>
        {querySecondary?.map((movie:ISmallCard) => <SmallCard 
          key={movie.id}
          id={movie.id} 
          title={movie.title} 
          poster_path={movie.poster_path} 
          vote_average={movie.vote_average} 
          genre={movie.genre}
        />)}
      </View>
      {errorQuerySecondary != '' && <ErrorApi>{errorQuerySecondary}</ErrorApi>} 
    </>
);


export default TopRated;
