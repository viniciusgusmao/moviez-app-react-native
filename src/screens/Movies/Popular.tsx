import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import BigCard from '../../components/BigCard';
import { TitlePage } from '../../components/Common';
import { IBigCard } from '../../interfaces';

type PropsPopular = {
  movies: IBigCard[]
}

const Popular:React.FC<PropsPopular> = ({ movies }) => ( 
    <>
      <TitlePage>Popular</TitlePage>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {movies?.map((movie:IBigCard) => <BigCard 
          key={movie.id}
          id={movie.id} 
          title={movie.title} 
          poster_path={movie.poster_path} 
          vote_average={movie.vote_average} 
        />)}
      </ScrollView>
    </>
)


export default Popular;

