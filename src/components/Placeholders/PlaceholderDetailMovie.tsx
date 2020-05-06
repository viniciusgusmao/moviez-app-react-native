import React from 'react';
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade
} from "rn-placeholder";

const PlaceholderDetailMovie: React.FC = () => <Placeholder
    Animation={Fade}
  >
    <PlaceholderMedia style={{ width: '100%', marginRight: 10, marginTop: 30, height: 250 }} />
    <PlaceholderLine width={100} height={20} style={{ marginTop: 10 }} />
    <PlaceholderLine width={100} />
    <PlaceholderLine width={60} />
    <PlaceholderLine width={90} />
    <PlaceholderLine width={80} />
    <PlaceholderLine width={60} />
  </Placeholder>
  

export default PlaceholderDetailMovie;