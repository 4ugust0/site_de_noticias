import styled from "styled-components";
import { Buttons,Colors } from "../Colors/Colors";


export const ButtonCardLastNews = styled.button`

    margin-top: 20px;

    width: 200px;
    padding: 15px;
    background: transparent;
    border: 1px solid ${Buttons.border};
    border-radius: 10px;
    color: ${Buttons.color};
    font-size: 14pt;

    cursor: pointer;
`


export const ButtonCardMostRead = styled.button`


    margin-top: 15px;
    width: 120px;
    padding: 8px 0;
    background: transparent;
    border-radius: 10px;
    border: 1px solid ${Buttons.border};
    color: ${Buttons.color};
    font-size: 10pt;

    cursor: pointer;

`

export const Link = styled.a`

    text-decoration: none;

`