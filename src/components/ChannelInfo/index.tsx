import React from 'react';

import { Container, HashtagIcon, Title, Separator, Description} from './style';

const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <HashtagIcon />
      <Title>chat-livre</Title>
      <Separator />
      <Description> Conversem entre si</Description>
    </Container>
  );
};

export default ChannelInfo;