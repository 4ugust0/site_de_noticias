import React from "react";

import { Destaques } from "../../components/Destaques/Destaques";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { LastNews } from "../../components/LastNews/LastNews";

export const Home: React.FC = ()=>{

    return(
        <div className="App">
            <Header />
            <Destaques />
            <LastNews />
            <Footer />
        </div>
    )

}