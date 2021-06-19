import styled from 'styled-components';
import { Container } from '../../Components/ToolCard/styles'
export const Header = styled.header`

`
export const Title = styled.h1`
    font-size: 3.6rem;
    font-family: 'Source Sans Pro', sans-serif;
`
export const Subtitle = styled.h3`
    font-size: 2.4rem;
    margin-bottom: 2rem;
`

export const Content = styled.div`
`

export const Actions = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
`

export const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Search = styled.div`
    display: flex;
    border: 1px solid #4F4F4F;
    border-radius: 5px;
    padding: 4px 8px;

`

export const CheckBox = styled.div`
    margin-left: 1rem;
    display: flex;
    align-items: center;
    input{
        height: 1.4rem;
        border:none;
        color: #666360;
    }
    label{
        margin-left: 5px;
    }
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid #4F4F4F;
    img {
        margin-right: 8px;
        height: 1.4rem;
    }
`

export const Cards = styled.div`
    ${Container}{
        margin-top: 2rem;
    }
`;