import React from "react";
import { Container, ContainerLogo,Logo,News,Search,Link, Form } from "./style";


export const Header: React.FC = ()=>{

    return(
        <Container>
            <ContainerLogo>
                <Link href="/"><Logo>Augusto<News>News</News></Logo></Link>
            </ContainerLogo>
            <Form action="/gXel1C4P7ffX0ZP2FPFv8w"><Search name="Search" type="text" placeholder="Busca..." /></Form>
        </Container>
    )

}