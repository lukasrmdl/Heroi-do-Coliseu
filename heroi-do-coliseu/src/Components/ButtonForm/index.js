import React from 'react';
import {BotaoCustomizado} from './styles';

const BotaoForm = ({
    type,
    text,
    onClick,
}) => {
    return (
        <BotaoCustomizado 
        type={type}
        text={text}
        onClick={onClick}>
        {text}
        </BotaoCustomizado>
    );
}

export default BotaoForm;