import axios from "axios";
import React from "react";
import { Container,ContainerText,Title,SubTitle,OverlayDark,Link  } from "./style";


export const Destaques: React.FC = ()=>{

    return(
        <Container>
            <OverlayDark>
                <ContainerText>
                    <Link href="/slug-aqui"><Title>Quer Fugir das Praias de Verão?</Title></Link>
                    <SubTitle>Donec consectetur libero eget bibendum ullamcorper. Quisque auctor nulla eu enim ultrices laoreet. Na..</SubTitle>
                </ContainerText>
            </OverlayDark>
        </Container>
    )

}