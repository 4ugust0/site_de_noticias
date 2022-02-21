import React from "react";
import { Container,ContainerCards } from "./style";
import { Cards } from "./style";
import { Title } from "../Destaques/style"; 
import { MostRead } from "../Most-Read/MostRead";
import { Card } from "../Cards/CardLastNews/Card";

export const LastNews: React.FC = ()=>{

    return(

        <Container>
            <Title>Últimas Notícias</Title>
            <Cards>
                <ContainerCards>
                    <Card />
                    <br />
                    <br />
                    <Card />
                </ContainerCards>
                <MostRead />
            </Cards>
        </Container>

    )

}