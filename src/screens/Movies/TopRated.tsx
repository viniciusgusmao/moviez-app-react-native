import React,{ useEffect, useState } from 'react';
import { View } from 'react-native';
import { TitlePage } from '../../components/Common';
import { ISmallCard } from '../../interfaces';
import SmallCard from '../../components/SmallCard';

type PropsTopRated = {
  movies: ISmallCard[],
}

const TopRated: React.FC<PropsTopRated> = ({ movies } ) => (
    <>
      <TitlePage marginTop={15}>Top Rated</TitlePage>
      <View>
        {movies?.map((movie:ISmallCard) => <SmallCard 
          key={movie.id}
          id={movie.id} 
          title={movie.title} 
          poster_path={movie.poster_path} 
          vote_average={movie.vote_average} 
          genre={movie.genre}          
        />)}
      </View>
    </>
);



export default TopRated;
