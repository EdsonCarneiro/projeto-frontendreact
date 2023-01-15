import styled from "styled-components";

export const Container = styled.header`
display: flex;
padding: 20px;
background-image: url("https://blog.buscaonibus.com.br/wp-content/uploads/2020/12/ceu-estrelado-no-brasil-viagem.jpg")  ;
justify-content: space-between;
width: 100%;
margin: 0 auto;

@media (min-width: 375px) {
    min-width: 630px;
   
 

   }

.cabecalho {
align:center;    
text-align:center;
color:#FFFFFF;
font-size: 100px;

   
}

.icone{
    margin-right:50px;
    margin-top: 25px;
    margin-bottom: 25px;
    background-color: #FFFFFF;
    padding: 20px;
    width: 20px;
    border-radius: 20%;
    cursor: pointer;
}

.span{  
display: flex;
justify-content: first baseline;
}

.contador{
    margin-right: -50px;
    margin-top: 30px;
    z-index: 10;
    font-weight: bold;
    list-style: none;
    font-size: 20px;
}




`