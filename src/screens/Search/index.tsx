import React,{ useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Container from 'components/Container';
import styled from 'styled-components';
import { MaterialIcons } from '@expo/vector-icons';
import VerticalCard from 'components/VerticalCard';
import { TextInput } from 'react-native';

const Search: React.FC = ({ route, navigation }) => {
  const { isMovie } = route.params;
  const [isSearch, setIsSearch] = useState(false)
  const [query, setQuery] = useState();
  
  return <Container>
    <Header>
      <TouchableOpacity onPress={() => navigation.goBack()  }><MaterialIcons name="arrow-back" size={34} color="black" /></TouchableOpacity>
      <TextInput 
        value={query}
        placeholder={`Search for a ${isMovie ? 'movie' : 'tv show'}`}
        onChangeText={(text) => { 
          setIsSearch(false) 
          setQuery(text) 
        }}
        style={{ padding: 10,
          flex: 1,
          fontSize: 18,
          paddingLeft: 20,
          borderRadius: 40,
          borderWidth: 1,
          marginLeft: 10,
          marginRight: 10,
          borderColor: 'gainsboro' }}
      />
      <TouchableOpacity style={{ backgroundColor: 'black', borderRadius: 25, padding: 5 }} onPress={() => setIsSearch(true)  }><MaterialIcons name="search" size={34} color="white" /></TouchableOpacity>
    </Header>
    {isSearch && <VerticalCard 
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