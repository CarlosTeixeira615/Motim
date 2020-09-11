import React from "react";
import {Container, Conteudo, List, Projetos} from "./styles";
import Carrocel from "../../Components/Carrocel";

const Home: React.FC = () => {
  return (
    <Container>
      <header>
        <h1>Sobre</h1>
        <h1>Serviços</h1>
        <h1>Portifólio</h1>
        <h1>Orçamento</h1>
        <h1>Contato</h1>
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
            <p>
              Criação/Redesign de marcas fortes, criativas, e com personalidade.
            </p>
          </div>
          <div>
            <h1>MOTION DESIGN:</h1>
            <p>Criação de flyes's animados de até 1 minuto.</p>
          </div>

          <div>
            <h1>UI/UX</h1>
            <p>
              Criação de interfaces para aplicação web/mobile baseada em
              pesquisa e análise.
            </p>
          </div>
          <div>
            <h1>SOCIAL MEDIA:</h1>
            <p>
              Criação de peças publicitárias para redes sociais que marcam e
              geram engajamento.
            </p>
          </div>
          <div>
            <h1>CONSTRUÇÃO DE SITES</h1>
            <p>
              Sites exclusivos para o seu negócio, totalmente responsivos
              baseados em análise e planejamento.
            </p>
          </div>
          <div>
            <h1>MÍDIA OFFLINE</h1>
            <p>
              Desenvolvimento de mídia off, como panfletos,cartões de visita,
              fachadas e muito mais.
            </p>
          </div>
        </div>
      </List>
      <Projetos>
        <section>
          <article>
            <img src="http://placekitten.com/305/205" alt=" " />
          </article>
          <article>
            <img src="http://placekitten.com/305/205" alt=" " />
          </article>
          <article>
            <img src="http://placekitten.com/330/240" alt=" " />
          </article>
          <article>
            <img src="http://placekitten.com/280/250" alt=" " />
          </article>
          <article>
            <img src="http://placekitten.com/310/210" alt=" " />
          </article>
          <article>
            <img src="http://placekitten.com/430/240" alt=" " />
          </article>
        </section>
      </Projetos>
      <Carrocel />
    </Container>
  );
};

export default Home;
