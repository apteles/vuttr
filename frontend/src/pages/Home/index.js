import React from 'react';
import * as S from './styles'
import Container from '../../Components/Layout/Container'
import ToolCard from '../../Components/ToolCard'
import searchIcon from '../../assets/Icon-Search-2px.svg'
import searchPlus from '../../assets/Icon-Plus-Circle-2px.svg'
function Home() {
    return (
        <Container>
            <S.Header>
                <S.Title>VUTTR</S.Title>
                <S.Subtitle>Very Useful Tools to Remember</S.Subtitle>
            </S.Header>

            <S.Content>
                <S.Actions>
                    <S.SearchContainer>
                        <S.Search>
                            <img src={searchIcon} />
                            <input placeholder="search" />
                        </S.Search>
                        <S.CheckBox>
                            <input type="checkbox" name="tag" id="tag" />
                            <label htmlFor="tag">search in tag only</label>
                        </S.CheckBox>
                    </S.SearchContainer>
                    <S.Button>
                        <img src={searchPlus} />
                        Add
                        </S.Button>
                </S.Actions>
                <S.Cards>
                    <ToolCard />
                    <ToolCard />
                    <ToolCard />
                    <ToolCard />
                </S.Cards>


            </S.Content>


        </Container>
    )
}

export default Home;