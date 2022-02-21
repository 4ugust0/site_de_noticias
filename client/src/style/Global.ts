import { createGlobalStyle } from "styled-components";
import { fonts } from "../components/fonts/Fonts";

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: ${fonts.Montserrat};
    }

`