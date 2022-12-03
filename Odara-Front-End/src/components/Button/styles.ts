import styled from 'styled-components';

export const Container = styled.div`
    padding: 20px;
    margin: 0 auto;
    border: 1px solid white;
    border-radius: 10px;
    background-color: var(--orange);

     :hover{
        background-color: var(--orangeblack);
     }

     @media screen and (min-width: 300px) and (max-width: 640px){
       margin-top: 20px;
    } 
     
`;

export const Content = styled.div`

    @media screen and (min-width: 300px) and (max-width: 640px){
        width: 80%;
        margin: 0 auto;
    } 
`;

export const TextButton = styled.h4`
    text-align: center;
    font-size: 16px;
    color: white
`;