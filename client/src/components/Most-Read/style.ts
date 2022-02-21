import styled from "styled-components";
import { ColorsComponentsIndex, Colors } from "../Colors/Colors";
import { Breakpoints } from "../Responsive/Breakpoints";

export const Container = styled.div`

    width: 37%;
    height: 100%;
    background-color: white;
    border-radius: 10px;

    @media(max-width: ${Breakpoints.width930}){
        margin-top: 30px;
        width: 100%;
    }

`

export const Content = styled.div`

    height: 780px;
    background-color: white;
    border-radius: 10px;

    overflow-y: scroll;

    @media(max-width: ${Breakpoints.width1213}){
        height: 820px;
    }

    @media(max-width: ${Breakpoints.width1002}){
        height: 880px;
    }

    @media(max-width: ${Breakpoints.width930}){
        width: 100%;
        height: 750px;
    }

    @media(max-width: 499px){
        height: 820px;
    }

    @media(max-width: 405px){
        height: 880px;
    }

    @media(max-width: 367px){
        height: 930px;

    }   

`

export const Header = styled.div`

    text-align: center;
    padding: 10px;
    background-color: ${ColorsComponentsIndex.CMR};
    color: ${Colors.WHITE};
    border-radius: 10px 10px 0 0;

    

`

export const TitleHeader = styled.h1`

    font-size: 15pt;

` 