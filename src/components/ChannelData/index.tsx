import React, { useRef, useEffect} from 'react';

import ChannelMessage, {Mention} from '../ChannelMessage';

import {Container, Messages, InputWrapper, Input, InputIcon } from './style';

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;
        if(div){
            div.scrollTop = div.scrollHeight; 
        }
    })
    return (
        <Container>
            <Messages ref={messagesRef}>
                {Array.from(Array(15).keys()).map((n) => ( 
                        <ChannelMessage 
                        author = "Nome Sobrenome"
                        date="21/06/2020"
                        content="olha só essa mensagem!"
                    />
                ))}
                <ChannelMessage 
                    author = "Nome Sobrenome"
                    date="21/06/2020"
                    content="olha só essa mensagem!"
                />
                <ChannelMessage 
                    author = "Nome Bot"
                    date="21/06/2020"
                    content={
                        <>
                        <Mention> @Guilherme Rodz</Mention>, me carrega no lol
                        </>
                    }
                />
            </Messages>

            <InputWrapper>
                <Input placeholder="Conversar em #chat-livre" />
                <InputIcon />
            </InputWrapper>

        </Container>
    )
};

export default ChannelData;