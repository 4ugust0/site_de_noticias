import styled from "styled-components";
import { Colors } from "../Colors/Colors";
import landscape from "./image/Landscape.jpg"
import { Breakpoints } from "../Responsive/Breakpoints";

export const Container = styled.div`

    margin: 40px auto;
    width: 900px;
    height: 600px;

    border-radius: 20px;

    background-image: url(${landscape});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 100% 100%;

    @media(max-width: ${Breakpoints.width930}){

        width: 93%;

    }

    @media(max-width: ${Breakpoints.width460}){
        height: 400px;
    }

`

export const OverlayDark = styled.div`
    
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.4);

    border-radius: 20px;

    display: flex;
    align-items: flex-end;

    padding: 30px;

`

export const ContainerText = styled.div`

    width: 500px;

    @media(max-width: 580px){
        width: 100%;
    }

`


export const Title = styled.h1`

    font-size: 47pt;
    font-weight: 700;
    @media(max-width: ${Breakpoints.width460}){
        font-size: 30pt;
    }

`

export const SubTitle = styled.p`

    margin-top: 20px;
    font-size: 11pt;
    font-weight: 400;
    color: ${Colors.WHITE };

`

export const Link = styled.a`

    text-decoration: none;
    color: ${Colors.WHITE};

`