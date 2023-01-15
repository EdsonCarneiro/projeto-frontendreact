import styled from "styled-components";

export const ContainerCarrinho = styled.div`


display: grid;
grid-template-columns: 1fr   ;
width: 80%;
margin: 0 auto;
gap: 20px; 

.informacoes{

    display: grid;
  margin: 0 auto;
  grid-template-columns: 1fr; 
  list-style: none;
    text-align: center;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    gap: 10px;
  

  
    
}

.removerButton {
    padding: 20px;
    filter: drop-shadow(0 0 0.4em #6795BC);
    background-color: white;
    border-radius: 20px;
    border-color: black;
    margin-top: 20px;
    margin-bottom: 20px;

}

.total{
border-radius: 20px;
border-color: black;
text-align: center;
font-weight:bold;
 font-family: Arial, Helvetica, sans-serif;
 background-color: white;
 width: 70%;
margin: 0 auto;
filter: drop-shadow(0 0 0.4em #6795BC);
padding: 20px;
font-size: xx-large;

}


.infos{
  
    align-items: center;
    display: grid;
    grid-template-columns: 1fr;
    min-width: 400px;

    border-radius: 20px;
    border-color: black;
    font-weight:bold;
    font-family: Arial, Helvetica, sans-serif;
    background-color: white;
    width: 500px;
    margin: 0 auto;
    filter: drop-shadow(0 0 0.4em #6795BC);


}

/* botão finalizar compra */
.mudartela{
    font-size: medium;
    font-weight: bold;
 
  margin: 0 auto;
    background-color: white;
    border-radius: 8px;
    border-color: #6795BC;
    cursor: pointer;
    width: 30%;
    padding: 10px;
    :hover{
        background-color: #6795BC;
        color: white;
    }

    @media (min-width: 480px) {
       margin-left: 35%;
  
  }
}

.imagem{
    filter: drop-shadow(0 0 0.4em #6795BC);
   border-radius: 8px;
   width:60%;
  height:70%; 
  margin: 0 auto;
  margin-top: 20px;


}

`

export const Cabecalho = styled.div`
    font-weight: bold;
   text-align: center;
   font-family: Arial, Helvetica, sans-serif;

`

