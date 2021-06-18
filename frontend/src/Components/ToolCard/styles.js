import styled from 'styled-components';

export const Container = styled.div`
    padding: 1.5rem;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 5px 7px #0000000D;
    border: 1px solid #EBEAED;
    border-radius: 5px;
    opacity: 1;
`;
export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
`;
export const Title = styled.div`
    font-size: 1.6rem;
    text-decoration: underline;
`;

export const Action = styled.div`
    button{
        display: flex;
        align-items: center;
        border: none;
        background-color: transparent;
        color: #F95E5A;
        img {
            margin-right: 5px;
            height: 1.4rem;
        }
    }
    
`;

export const Content = styled.div`

    margin-bottom: 5px;
    p{
        font-size: 1.4rem;
    }
`;

export const Footer = styled.footer`
    span{
       font-size: 1.4rem;
       font-weight: bold;
       margin-right: 1rem;
    }
`;
