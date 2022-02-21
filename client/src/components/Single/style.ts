import styled from "styled-components";
import { Colors,ColorsNoticePub } from "../Colors/Colors";
import { Breakpoints } from "../Responsive/Breakpoints";

export const Container = styled.div`

    width: 60%;
    padding: 20px;
    background-color: ${Colors.WHITE};

    border-radius: 10px;

    @media(max-width: ${Breakpoints.width930}){
        width: 100%;
    }
`

export const Title = styled.h1`

    font-size: 35pt;

    @media(max-width: 467px){
        font-size: 25pt;
    }

    @media(max-width: 400px){
        font-size: 20pt;
    }

`

export const Author = styled.h4`

    padding: 15px 0;

    font-size: 12pt;
    font-weight: 800;
    color: ${ColorsNoticePub.ColorAuthor} ;
`

export const Text = styled.p`
    font-size: 12pt;
    line-height: 25px;
    color: ${ColorsNoticePub.NoticeText};
`

export const SubTitle = styled.h2`

    padding: 15px 0;

    font-size: 17pt;
    color:${ColorsNoticePub.NoticeText};
`

