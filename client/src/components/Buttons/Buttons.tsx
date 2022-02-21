import React from "react";
import { ButtonCardLastNews, ButtonCardMostRead, Link } from "./style";


export const ButtonsLastNews: React.FC = ()=>{

    return(

        <Link href="/encarar-o-surf"><ButtonCardLastNews>Saiba mais</ButtonCardLastNews></Link>

    )

}

export const ButtonsMostRead: React.FC = ()=>{

    return(

        <Link href="/encarar-o-surf"><ButtonCardMostRead>Saiba mais</ButtonCardMostRead></Link>

    )

}