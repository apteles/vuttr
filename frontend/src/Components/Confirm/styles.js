import styled from 'styled-components';

export const Container = styled.div`
    min-width: 40rem;
    min-height: .9rem;
`;

export const Header = styled.header``
export const Title = styled.h2`
    display: flex;
    align-items: center;
    img{
        margin-right: 5px;
        height: 1.4rem;
    }
`
export const Content = styled.div`
    width: 100%;
    p{
        padding: 1rem;
        font-size: 1.2rem;
    }
`
export const Footer = styled.footer`
    display: flex;
    margin-top: 2rem;
    justify-content: flex-end;

    button{
        margin-left: 10px;
        padding: 5px 10px;
        background: transparent;
        border-radius: 5px;
    }
`