import React,{ createRef, useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import Container from 'components/Container';
import styled from 'styled-components';
import { MaterialIcons } from '@expo/vector-icons';
import DelayInput from "react-native-debounce-input";
import VerticalCard from 'components/VerticalCard';

const Search: React.FC = ({ route, navigation }) => {
  const { isMovie } = route.params;
  const [query, setQuery] = useState();
  const inputRef = createRef();
  return <Container>
    <Header>
      <TouchableOpacity onPress={() => navigation.goBack()  }><MaterialIcons name="arrow-back" size={34} color="black" /></TouchableOpacity>
      <DelayInput
        value={query}
        minLength={3}
        inputRef={inputRef}
        onChangeText={setQuery}
        placeholder={`Search for a ${isMovie ? 'movie' : 'tv show'}...`}
        delayTimeout={500}
        style={{ padding: 10,
          flex: 1,
          fontSize: 18,
          paddingLeft: 20,
          borderRadius: 40,
          borderWidth: 1,
          marginLeft: 20,
          borderColor: 'gainsboro' }}
      />
    </Header>
    {Boolean(query) && <VerticalCard 
      title={`${isMovie ? 'Movies' : 'TV Shows'} by: ${query}`} 
      url={isMovie ? "search/movie" : "search/tv"} 
      isMovie={isMovie} 
      query={query}
      urlGenre={isMovie ? "genre/movie/list" : "genre/tv/list"}  />}
  </Container>;
}

const Header = styled.View`
  flex-direction: row;
  align-items: center;
`; 

export default Search;