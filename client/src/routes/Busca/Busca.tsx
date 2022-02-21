import React, { useState } from "react";
import { Header } from "../../components/Header/Header";
import { Results, TitleResults } from "../../components/Busca/Busca";
import { Container } from "./style";
import { Footer } from "../../components/Footer/Footer";


export const Buscar: React.FC = ()=>{

    const [NomeDaNoticia, setNomeDaNoticia] = useState('')
    const [Review, setReview] = useState('')

    return(
        <div className="app">
            <Header />
            <Container>
                <TitleResults />
                <Results />
            </Container>
            <Footer />
        </div>

    )

}