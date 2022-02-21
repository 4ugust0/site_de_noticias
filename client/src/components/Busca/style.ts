import styled from "styled-components";
import { ColorsComponentsIndex } from "../Colors/Colors";

export const Container = styled.div`
    margin: 20px auto;
    width: 90%;
    background-color: white;

    border-radius: 15px;
`

export const Header = styled.h1`

    padding: 10px;
    background: ${ColorsComponentsIndex.Search} ;
    color: white;
    text-align: center;

    border-radius: 15px 15px 0 0;
`

export const Content = styled.div`

    padding: 10px;

`

/* Title */

export const ContainerTitle = styled.div`

    padding: 10px 0;

`

export const Title = styled.h1`
    text-align: center;
    font-size: 40pt;

`