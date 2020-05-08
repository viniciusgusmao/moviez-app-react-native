import React from 'react';
import { FlatList, View } from 'react-native';
import SeasonItem from 'screens/TV/Seasons/SeasonItem';
import styled from 'styled-components';
import Line from 'components/Line';

const Seasons: React.FC = ({data}) => {

  const _renderItem = ({item}) => <SeasonItem {...item} />

  return <FlatList 
            ListHeaderComponent={() => <Label>Seasons</Label>}
            data={data}
            ItemSeparatorComponent={() => <View style={{ marginVertical: 5 }} />}
            renderItem={_renderItem}
            keyExtractor={item => item.id}
            getItemLayout={(data, index) => (
              {length: 120, offset: 120 * index, index}
            )}
            initialNumToRender={4}
            removeClippedSubviews={true}
          />;
}

const Label = styled.Text`
  margin-bottom: 5px;
  color: #A9A4A4;
  font-size: 12px;
  font-weight: bold;
`;

export default Seasons;