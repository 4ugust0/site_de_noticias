import React from "react";
import { Container,SideImage,ContainerText,Title,Text } from "./style";
import { ButtonsMostRead } from "../../Buttons/Buttons";

export const CardResults: React.FC = ()=>(

    <Container>
    <SideImage></SideImage>
    <ContainerText>
        <Title>Natureza</Title>
        <Text>A importância da floresta do ártico para a biodiversidade mundial. Qual o impacto o degelo na fauna e flora?</Text>
        <ButtonsMostRead>Saiba Mais</ButtonsMostRead>
    </ContainerText>
    </Container>    

)