import React from "react";
import { Header } from "../../components/Header/Header";
import { Single } from "../../components/Single/Single";
import { Container } from "./style";
import { MostRead } from "../../components/Most-Read/MostRead";
import { Footer } from "../../components/Footer/Footer";

export const DetailsNews: React.FC = ()=>{

    return(
        <div className="app">
            <Header />
            <Container>
                <Single />
                <MostRead />
            </Container>
            <Footer />
        </div>
    )

}