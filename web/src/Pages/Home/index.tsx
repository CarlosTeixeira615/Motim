import React from "react";
import { Container, Conteudo, List, Logo, Contato, Folter } from "./styles";

import Carrocel from "../../Components/Carrocel";

import whats from "../../assets/whats.png";
import insta from "../../assets/instagram.png";
import face from "../../assets/logoface.png";
import logo from "../../assets/logo.png";

const Home: React.FC = () => {
  return (
    <Container>
      <Logo>
        <img src={logo} alt="logo" />
      </Logo>
      <header>
        <h1>Sobre</h1>
        <h1>Serviços</h1>
        <h1>Portifólio</h1>
        <h1>Orçamento</h1>
        <h1>Contato</h1>
        <img src={whats} alt="whats" />
        <img src={insta} alt="insta" />
        <img src={face} alt="face" />
      </header>
      <Conteudo>
        <div>
          <h1>Gerando Soluções, revolucionando negócios!</h1>
          <p>
            Atuante desde 2016, a Motim é uma agência com DNA 100% Baiano, alma
            jovem e uma tripulação extremamente criativa! Já desenvolvemos
            projetos para mais de 10 estados do Brasil a cerca de 5 países,
            revolucionando a cultura criativa de diversos negócios.
          </p>
        </div>
      </Conteudo>
      <List>
        <h1>O que fazemos</h1>
        <div>
          <div>
            <h1>BRANDING/ID VISUAL:</h1>
            <h4>
              Criação/Redesign de marcas fortes, criativas, e com personalidade.
            </h4>
          </div>
          <div>
            <h1>MOTION DESIGN:</h1>
            <h4>Criação de flyes's animados de até 1 minuto.</h4>
          </div>

          <div>
            <h1>UI/UX</h1>
            <h4>
              Criação de interfaces para aplicação web/mobile baseada em
              pesquisa e análise.
            </h4>
          </div>
          <div>
            <h1>SOCIAL MEDIA:</h1>
            <h4>
              Criação de peças publicitárias para redes sociais que marcam e
              geram engajamento.
            </h4>
          </div>
          <div>
            <h1>CONSTRUÇÃO DE SITES</h1>
            <h4>
              Sites exclusivos para o seu negócio, totalmente responsivos
              baseados em análise e planejamento.
            </h4>
          </div>
          <div>
            <h1>MÍDIA OFFLINE</h1>
            <h4>
              Desenvolvimento de mídia off, como panfletos,cartões de visita,
              fachadas e muito mais.
            </h4>
          </div>
        </div>
      </List>
      <Carrocel />
      <Contato>
        <h1>CONTATO:</h1>
        <h2>+55 75 98862-8199 // +55 75 99190-2481</h2>
        <h2>AGENCIAMOTIMBR@GMAIL.COM</h2>
        <button>Orçamento</button>
      </Contato>
      <Folter>
        <div>
          <h6>@ 2020, Salvador, Bahia, Brasil</h6>
        </div>
        <h6>Funionamos de segunda a sábado, das 8:00 ás 19:00</h6>
      </Folter>
    </Container>
  );
};

export default Home;
