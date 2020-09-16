import styled from "styled-components";
import { shade } from "polished";

import header from "../../assets/topoheader.png";
import soluctions from "../../assets/soluctions.png";
import check from "../../assets/check.png";
import info from "../../assets/Contato.png";

export const Logo = styled.div`
  height: 50px;

  background: url(${header}) no-repeat center;
  display: flex;
  div {
    img {
      margin-top: 10px;
      margin-left: 10px;
      height: 30px;
    }
  }
`;

export const Container = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: "Montserrat", sans-serif;
    src: url("https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap");
  }

  header {
    flex: 1;
    overflow: hidden;
    padding: 3px 16px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    div {
      img {
        margin-left: 8px;
        margin-top: 5px;
        height: 32px;
      }
    }
    h1 {
      margin-right: 2px;

      float: left;
      color: black;
      padding: 12px;
      text-decoration: none;
      font-size: 18px;
    }
  }
`;

export const Conteudo = styled.div`
  height: 602px;
  height: 602px;
  display: flex;
  flex-direction: column;
  background: url(${soluctions}) no-repeat center;
  justify-content: center;
  h1 {
    max-width: 950px;
    padding: 1% 15%;
    color: #06f060;
  }
  p {
    max-width: 950px;
    padding: 1% 15%;
    color: white;
  }
`;

export const List = styled.div`
  background: url(${check}) no-repeat center;
  background-color: black;
  color: white;
  h2 {
    padding-top: 5vh;
    font-size: 36px;
    margin-left: 11%;
  }
  div {
    margin-left: 5%;
    h1 {
      padding-top: 5vh;
      margin-bottom: 2vh;
      color: white;
    }
    div {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      grid-gap: 0px 20px;
      h1 {
        width: 150px;
        color: #06f060;
      }

      h4 {
        width: 180px;
        margin-bottom: 2vh;

        color: white;
      }
    }
  }
`;

export const Contato = styled.div`
  color: #06f060;
  display: flex;
  padding: 3vh 0px;
  justify-content: center;
  font-size: 1.5vh;
  text-align: center;
  background: url(${info}) no-repeat center;

  button {
    background: #ffffff;
    height: 36px;
    border-radius: 15px;
    border: 3px solid #f1f1f1;
    color: #06f060;
    width: 110px;
    font-size: 15px;
    margin-top: 16px;
    transition: background-color 0.2s;
    &:hover {
      background: ${shade(0.2, "#ffffff")};
    }
  }
`;

export const Folter = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  background: #232629;
  text-align: center;
  h6 {
    max-width: 210px;
    margin-top: 3vh;
    margin-bottom: 3vh;
    margin-left: 3vh;
  }
`;
