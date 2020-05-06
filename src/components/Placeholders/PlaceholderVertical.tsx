import React from 'react';
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade
} from "rn-placeholder";

const PlaceholderVertical: React.FC = () => <><Placeholder
    Animation={Fade}
    style={{ marginTop: 15 }}
    Left={() => <PlaceholderMedia style={{ marginRight: 10, width: 90, height: 120 }} />}
  >
    <PlaceholderLine width={80} height={25} />
    <PlaceholderLine width={80} />
    <PlaceholderLine width={80} />
    <PlaceholderLine width={40} />
  </Placeholder>
  <Placeholder
    Animation={Fade}
    style={{ marginTop: 15 }}
    Left={() => <PlaceholderMedia style={{ marginRight: 10, width: 90, height: 120 }} />}
  >
    <PlaceholderLine width={80} height={25} />
    <PlaceholderLine width={80} />
    <PlaceholderLine width={80} />
    <PlaceholderLine width={40} />
  </Placeholder>
  </>

export default PlaceholderVertical;