import React from 'react';
import {  SectionButton, BackdropImage, ButtonHeader, TitleDetailPage } from 'components/DetailsMovieAndTv';
import urls from 'res/urls';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import ImageNotFound from 'components/ImageNotFound';
import { Dimensions } from 'react-native';

type Props = {
  title: string,
  backdrop_path: string,
  poster_path: string
}

const Header: React.FC<Props> = ({ title, backdrop_path, poster_path }:Props) => {
  const navigation = useNavigation();
  return (
  <BackdropImage imageStyle={{ resizeMode: 'cover' }} source={{ uri: `${urls.baseImages}${backdrop_path ? backdrop_path : poster_path }` }} >
    <LinearGradient
          colors={['rgba(0,0,0,0.8)', 'transparent']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: 100,
          }}
        />
    <SectionButton>
      <ButtonHeader onPress={() => navigation.goBack() }>
        <MaterialIcons name="arrow-back" size={34} color="white" />
      </ButtonHeader>
      <ButtonHeader onPress={() => navigation.navigate('Home') }>
        <MaterialIcons name="home" size={34} color="white" />
      </ButtonHeader>
    </SectionButton>
    <TitleDetailPage style={{
      textShadowColor: 'dimgray',
      textShadowOffset: {
        width: 1,
        height: 1
      },
      textShadowRadius: 1
    }}>{title}</TitleDetailPage>
  </BackdropImage>
  ) 
}

export default Header;