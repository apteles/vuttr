import React from 'react';
import searchClose from '../../assets/Icon-Close-Circle-2px.svg'
import * as S from './styles';

function Confirm({ onConfirm, onCancel, title }) {
    return (
        <S.Container>
            <S.Header>
                <S.Title>
                    <img src={searchClose} />
                     Remove tool
                </S.Title>
            </S.Header>
            <S.Content>
                <p>Are you sure you want to remove {title}?</p>
            </S.Content>
            <S.Footer>
                <button type="button" onClick={onCancel}>Cancel</button>
                <button type="button" onClick={onConfirm}>Confirm</button>
            </S.Footer>
        </S.Container >
    );
}

export default Confirm;