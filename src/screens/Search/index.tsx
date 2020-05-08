import React from 'react';
import { TouchableOpacity } from 'react-native';
import Container from 'components/Container';
import styled from 'styled-components';
import { MaterialIcons } from '@expo/vector-icons';


const Search: React.FC = ({ route, navigation }) => {
  const { isMovie } = route.params;
  return <Container>
    <Header>
      <TouchableOpacity onPress={() => navigation.goBack()  }><MaterialIcons name="arrow-back" size={34} color="black" /></TouchableOpacity>
      <SearchBar placeholder="Search..." />
    </Header>
  </Container>;
}

const Header = styled.View`
  flex-direction: row;
  align-items: center;
`; 

const SearchBar = styled.TextInput`
  padding: 10px;
  flex: 1;
  font-size: 18px;
  padding-left: 20px;
  border-radius: 40px;
  border-width: 1px;
  margin-left: 6px;
  border-color: gainsboro;
`;

export default Search;