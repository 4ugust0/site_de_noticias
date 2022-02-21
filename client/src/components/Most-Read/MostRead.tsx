import React from "react";
import { CardMostRead } from "../Cards/CardMostRead/CardMostRead";
import { Container, Header, TitleHeader,Content  } from "./style";

export const MostRead: React.FC = ()=>(

    <Container>
        <Header>
            <TitleHeader>Mais Lidas</TitleHeader>
        </Header>
        <Content>
            <CardMostRead />
            <CardMostRead />
            <CardMostRead />
            <CardMostRead />
            <CardMostRead />
            <CardMostRead />
            <CardMostRead />
            <CardMostRead />
        </Content>
    </Container>


)