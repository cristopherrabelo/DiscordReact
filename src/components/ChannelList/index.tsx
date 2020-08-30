import React from 'react';
import ChannelButtom from '../ChannelButtom'

import { Container, Category, AddCategoryIcon } from './style';

const ChannelList: React.FC = () => {
    return (
        <Container>
            <Category>
                <span>CANAIS DE TEXTO</span>
                <AddCategoryIcon />
            </Category>

            <ChannelButtom channelName= "chat-livre" />
            <ChannelButtom channelName= "trabalho" />
            <ChannelButtom channelName= "lolzin" />
            <ChannelButtom channelName= "cs" />
            <ChannelButtom channelName= "valorant" />

        </Container>
    );
};

export default ChannelList;