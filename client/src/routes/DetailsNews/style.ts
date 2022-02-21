import styled from "styled-components";
import { ColorsComponentsIndex } from "../../components/Colors/Colors";
import { Breakpoints } from "../../components/Responsive/Breakpoints";

export const Container = styled.div`
    padding: 30px;
    background-color: ${ColorsComponentsIndex.LastNews};

    display: flex;
    justify-content: space-between;

    @media(max-width: ${Breakpoints.width930}){
        flex-direction: column;
        align-items: center;
    }
`