import styled from "styled-components";
import { shade } from "polished";

import header from "../../assets/topoheader.png";
import soluctions from "../../assets/soluctions.png";
import check from "../../assets/check.png";

export const Logo = styled.div`
  height: 50px;
  background: url(${header}) no-repeat center;
  img {
    height: 30px;
  }
`;

export const Container = styled.header`
  header {
    flex: 1;
    overflow: hidden;
    padding: 3px 16px;
    img {
      height: 32px;
    }
    h1 {
      float: left;
      color: black;
      padding: 12px;
      text-decoration: none;
      font-size: 18px;
    }
  }
`;

export const Conteudo = styled.div`
  background: url(${soluctions}) no-repeat center;
  height: 602px;
  div {
    max-width: 450px;
    h1 {
      color: #06f060;
    }
    p {
      color: white;
    }
  }
`;

export const List = styled.div`
  background: url(${check}) no-repeat center;
  height: 602px;
  h1 {
    color: white;
  }
  div {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-gap: 0px 20px;
    h1 {
      width: 150px;
      color: #06f060;
    }

    h4 {
      width: 180px;

      color: white;
    }
  }
`;

export const Contato = styled.div`
  color: #06f060;

  button {
    background: #ffffff;
    height: 56px;
    border-radius: 10px;
    border: 3px solid #f1f1f1;
    padding: 0 16px;
    color: #06f060;
    width: 360px;
    font-weight: 500;
    margin-top: 16px;
    transition: background-color 0.2s;
    &:hover {
      background: ${shade(0.2, "#ffffff")};
    }
  }
`;

export const Folter = styled.div`
  height: 60px;
  color: white;
  background: #232629;
`;
