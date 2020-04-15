import React from 'react';
import { Rating } from 'react-native-ratings';
import colors from 'res/colors';

import styled from 'styled-components';

interface IStar {
  vote_average: number
}

const Star: React.FC<IStar> = ({vote_average}:IStar) => (       
    <Rating
      type="star"
      startingValue={Math.round((vote_average/10)*5)}
      ratingColor={colors.yellow}
      ratingBackgroundColor={colors.lightGray}
      readonly={true}
      fractions={2}
      imageSize={20}
      style={{
        alignItems: 'flex-start', 
      }}
    />    
  );



export default Star;
