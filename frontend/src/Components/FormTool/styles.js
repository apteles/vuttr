import styled from 'styled-components';

export const Container = styled.div`
    min-width: 40rem;
    min-height: 30rem;
`;

export const Header = styled.header``
export const Title = styled.h2``
export const Content = styled.div`
    width: 100%;
`
export const FormField = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    label{
        font-size: 1.2rem;
    }
    input{
        height: 35px;
        border-radius: 5px;
        border: 1px solid #EBEAED;
        background: #EBEAED;
        padding: 13px;
        font-size: 1.4rem;
    }
    textarea{
        height: 70px;
        border: 1px solid #EBEAED;
        background: #EBEAED;
        padding: 13px;
        font-size: 1.4rem;
    }
    span{
        color: #F95E5A;
    }
`
export const Footer = styled.footer`
    display: flex;
    margin-top: 2rem;
    justify-content: flex-end;

    button{
        padding: 5px 10px;
        margin-right: 5px;
    }
`