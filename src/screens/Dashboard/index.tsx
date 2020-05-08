import React from 'react';

import Container from 'components/Container';
import VerticalCard from 'components/VerticalCard';
import HorizontalCard from 'components/HorizontalCard';


const Dashboard: React.FC = ({ route }) => {
  const { title1, title2, url1, url2, isMovie, urlGenre } = route.params;
  return (
    <Container>      
      <HorizontalCard title={title1} url={url1} isMovie={isMovie} />
      <VerticalCard title={title2} url={url2} isMovie={isMovie} urlGenre={urlGenre}  />
    </Container>
  );
}



export default Dashboard;