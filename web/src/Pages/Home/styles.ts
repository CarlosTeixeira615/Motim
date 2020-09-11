import styled from "styled-components";

export const Container = styled.header`
  header {
    flex: 1;
    overflow: hidden;
    background-color: #f1f1f1;
    padding: 3px 16px;

    h1 {
      float: left;
      color: black;
      padding: 12px;
      text-decoration: none;
      font-size: 18px;
    }
  }
`;
export const Conteudo = styled.div``;
export const List = styled.div`
div{
  display: grid;
  
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr ));
  grid-gap: 0px 20px ;
  h1{
    color:#06f060;
  }
}

  }
`;
export const Projetos = styled.section`
section{display: grid;
grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
grid-gap: 30px;}
img{
  height: 200px;
  width: 100%;
  object-fit: cover;
}

`;
