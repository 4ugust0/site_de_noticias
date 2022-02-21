import React from "react";
import { Container,Header,Content,ContainerTitle,Title } from "./style";
import { CardResults } from "../../components/Cards/CardResults/CardResults";

export const Results: React.FC = ()=>(

    <Container>
        <Header>33 Resultados</Header>
        <Content>
            <CardResults />
            <CardResults />
            <CardResults />
            <CardResults />
        </Content>
    </Container>


)

export const TitleResults: React.FC = ()=>(

    <ContainerTitle>
        <Title>Busca:</Title>
    </ContainerTitle>

)