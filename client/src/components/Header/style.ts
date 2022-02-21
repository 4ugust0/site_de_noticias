import styled from "styled-components";
import { ColorsComponentsIndex } from "../Colors/Colors";
import { Colors } from "../Colors/Colors";
import Icon from "./icons/search.svg"
import { Breakpoints } from "../Responsive/Breakpoints";

export const Container = styled.header`

    padding: 10px;
    background-color: ${ColorsComponentsIndex.HBF};

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    @media(max-width:${Breakpoints.width}) {
        justify-content: center;
    }

`

export const ContainerLogo = styled.div`

    padding: 10px;


`

export const Logo = styled.h1`

    font-weight: 300;
    color: ${Colors.WHITE};

`

export const News = styled.span`

    font-weight: 700;
    color: ${Colors.WHITE};

`

export const Form = styled.form`

    

`

export const Search = styled.input`

    width: 200px;
    height: 45px;

    padding-left: 50px;
    border: 0;
    border-radius: 10px;

    background-color: ${ColorsComponentsIndex.Search};
    background-image: url(${Icon});
    background-repeat: no-repeat;
    background-position-y: center;
    background-position-x: 10px;
    background-size: 30px;

    font-size: 17pt;
    color: ${Colors.WHITE};

    &::placeholder{
        color: ${Colors.WHITE};
    }

    &:focus{
        outline: none;
    }

`
export const Link = styled.a`

    text-decoration: none;
`
