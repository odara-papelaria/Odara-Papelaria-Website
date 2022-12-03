import styled from 'styled-components';
import { iconeDelete, iconeEdit } from '../../assets/images';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
`;

export const Text = styled.h3`
    font-size: 1rem;
    text-align: center;
    color: black;
    width: 19%;

    @media screen and (min-width: 300px) and (max-width: 640px){
        font-size: 0.8rem;
    } 
`;

export const ButtonEdit = styled.button`
    width: 40px;
    height: 40px;
    background-repeat: no-repeat;
    background-size: 100%; 
    background-position: center;
    background-image: url(${iconeEdit});
    border: 0px solid white;

    @media screen and (min-width: 300px) and (max-width: 640px){
        width: 36px;
        height: 36px;
    } 
`;

export const ButtonDelete = styled.button`
    width: 40px;
    height: 40px;
    background-repeat: no-repeat;
    background-size: 100%; 
    background-position: center;
    background-image: url(${iconeDelete});
    border: 0px solid white;

    @media screen and (min-width: 300px) and (max-width: 640px){
        width: 36px;
        height: 36px;
    } 
`;