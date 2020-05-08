import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';
import urls from 'res/urls';
import { ISeason } from 'interfaces';
import { Section } from 'components/DetailsMovieAndTv';
import BoxItem from 'components/BoxItem';

const SeasonItem: React.FC = (props: ISeason) => {
  return <Container>
    {props.poster_path ? <Poster resizeMode="cover" source={{ uri: `${urls.baseImages}${props.poster_path}` }}/> : <NoImage><Text style={{ fontSize: 12, textAlign: "center", color: 'silver' }}>Image not found</Text></NoImage>}
    <SubContainer>
      <Section>
        <BoxItem label="Name" description={props.name} />
        <BoxItem label="Episodes" description={props.episode_count} />
      </Section>
      <Section>
        <BoxItem label="Air date" description={props.air_date} />
      </Section>
    </SubContainer>
  </Container>;
}

const Container = styled.View`
  width: 100%;
  height: 120px;
  flex-direction: row;
`;

const SubContainer = styled.View`
  flex: 1;
  flex-direction: column;
`;

const Poster = styled.Image`
  width: 80px;
  height: 120px;
  margin-right: 6px;
`;

const NoImage = styled.View`
  width: 80px;
  height: 120px;
  margin-right: 6px;
  background-color: whitesmoke;
  justify-content: center;
  align-content: center;
`;


export default SeasonItem;