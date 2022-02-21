import styled from "styled-components";
import { ColorsComponentsIndex, ColorsNoticePub } from "../../Colors/Colors";
import ImageHeader from "./images/ImageHeader.png"

export const Container = styled.div`

    width: 47%;
    height: 100%;
    max-height: 650px;
    background-color: white;

    border-radius: 10px;

    @media(max-width: 1168px){
        max-height: 680px;
    }

    @media(max-width: 1057px){
        max-height: 700px;
    }

    @media(max-width: 998px){
        max-height: 700px;
    }

    @media(max-width: 935px){
        max-height: 700px;
    }

    @media(max-width: 930px){
        max-height: 100%;
    }

    @media(max-width: 650px){
        width: 100%;
    }


`

export const Header = styled.div`

    width: 100%;
    height: 230px;

    background-image: url(${ImageHeader});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: 100% 100%;

    border-radius: 10px 10px 0px 0px;

    @media(max-width: 650px){
        height: 300px;
    }


`

export const Main = styled.div`

    padding: 25px;
    text-align: left;

`

export const Categoria = styled.h3`
    padding: 20px 0;
    font-size: 12pt;
    color: ${ColorsComponentsIndex.CMR};

`

export const Title = styled.h1`
    padding: 10px 0;
    font-size: 22pt;

    @media(max-width: 1060px){
        font-size: 21pt;
    }

    @media(max-width: 1021px){
        font-size: 20pt;
    }

    @media(max-width: 998px){
        font-size: 18pt;
    }

`

export const Text = styled.p`
    
    padding: 10px 0;
    font-weight: 300;
    font-size: 12pt;
    color: ${ColorsNoticePub.NoticeText};

`