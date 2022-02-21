import styled from "styled-components";
import { ColorsComponentsIndex,ColorsNoticePub } from "../../Colors/Colors";
import Natureza from '../CardMostRead/images/Natureza.png'

export const Container = styled.div`

    width: 100%;
    padding: 20px;
    display: flex;

    text-align: left;

    @media(max-width: 400px){
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

`

export const SideImage = styled.div`

    
    padding: 20%;
    
    background-image: url(${Natureza});
    background-repeat: no-repeat;
    background-position: 100%;
    background-size: 100% 100%;

    border-radius: 20px;

    @media(max-width: 490px){
        height: 150px;
    }

    @media(max-width: 400px){
        width: 90%;
        height: 180px;
    }


`

export const ContainerText= styled.div`

    padding: 10px;
    padding-left: 20px;

`

export const Title = styled.h2`
    text-align: left;
    font-size: 13pt;
    letter-spacing: 2px;
    color:${ColorsComponentsIndex.MostReadTitle};


    @media(max-width: 400px){
        text-align: center;
        padding: 5px;
    }

`

export const Text = styled.p`

    font-size: 10pt;
    text-align: left;
    color: ${ColorsNoticePub.NoticeText};

    @media(max-width: 400px){
        text-align: center;
    }

`