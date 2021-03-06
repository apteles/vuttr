import React from 'react';
import searchClose from '../../assets/Icon-Close-Circle-2px.svg'
import * as S from './styles';

function ToolCard({ onDelete, id, title, link, description, tags }) {
    return (
        <S.Container>
            <S.Header>
                <S.Title>
                    <a href={link}>{title}</a>
                </S.Title>
                <S.Action>
                    <button onClick={() => onDelete(id)}>
                        <img src={searchClose} alt="close" />
                        remove
                    </button>
                </S.Action>
            </S.Header>
            <S.Content>
                <p>{description}</p>
            </S.Content>
            <S.Footer>
                {tags.map(({ name }, idx) => (
                    <span key={String(idx)}>#{name}</span>
                ))}
            </S.Footer>
        </S.Container>
    );
}

export default ToolCard;