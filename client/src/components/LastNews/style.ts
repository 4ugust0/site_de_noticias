import styled from "styled-components";
import { ColorsComponentsIndex } from "../Colors/Colors";

export const Container = styled.div`

    padding: 30px 0;
    background-color: ${ColorsComponentsIndex.LastNews};
    text-align: center;

`

export const Title = styled.h1`
    
    font-size: 20pt;

`

export const Cards = styled.div`

    margin: 20px auto;
    width: 90%;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    /*background: wheat;*/

    @media(max-width: 930px){
        flex-direction: column;
    }

`

export const ContainerCards = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;

    @media(max-width: 930px){
        width: 100%;
    }

    @media(max-width: 650px){
        width: 100%;
        margin-top: 30px;
        flex-direction: column;
    }

`