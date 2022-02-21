import React from "react";
import { Container,Header,Main,Title,Text, Categoria } from "./style";
import { ButtonsLastNews } from "../../Buttons/Buttons";


export const Card: React.FC = (props)=>{
    console.log(props)

    return (

        <Container>
            <Header />
            <Main>
                <Categoria>Natureza e Geral</Categoria>
                <Title>Como Encarar o Surf em Floripa</Title>
                <Text>A água gelada e o vento pode acabar com a sua felicidade de ir para a água. Cientistas afirmam que a chance de hipotermia é real e você precisa se cuidar. Veja como.</Text>
                <ButtonsLastNews />
            </Main>
        </Container>


    )

}