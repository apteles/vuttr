import React from 'react';
import searchClose from '../../assets/Icon-Close-Circle-2px.svg'
import * as S from './styles';

function ToolCard() {
    return (
        <S.Container>
            <S.Header>
                <S.Title>
                    <a href="#">Notion</a>
                </S.Title>
                <S.Action>
                    <button>
                        <img src={searchClose} />
                        remove
                    </button>
                </S.Action>
            </S.Header>
            <S.Content>
                <p> All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized.</p>
            </S.Content>
            <S.Footer>
                <span>#api</span>
                <span>#json</span>
                <span>#schema</span>
                <span>#node</span>
                <span>#github</span>
                <span>#rest</span>
            </S.Footer>
        </S.Container>
    );
}

export default ToolCard;