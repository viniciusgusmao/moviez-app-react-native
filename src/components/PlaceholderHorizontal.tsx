import React from 'react';
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Shine
} from "rn-placeholder";

const PlaceholderHorizontal: React.FC = () => <Placeholder
    Animation={Shine}
    Left={() => <><PlaceholderMedia style={{ marginRight: 10, width: 140, height: 200 }} />
    <PlaceholderMedia style={{ marginRight: 10, width: 140, height: 200 }} />
    <PlaceholderMedia style={{ marginRight: 10, width: 140, height: 200 }} />
    </>}
  >
  </Placeholder>

export default PlaceholderHorizontal;