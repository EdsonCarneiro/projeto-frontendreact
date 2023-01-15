import {Container} from "./styled"
import { FaRocket } from 'react-icons/fa';
import {BiCart, BiHome  } from "react-icons/bi";
import { tela } from "../../uteis/Uteis";


export function Header ({mudarTela, quantCarrinho, valorCondicional}){

  function icone(){
    switch (valorCondicional) {
      case tela.telaInicial:
         return (
     <span className="span">
          <li className="contador"> {quantCarrinho}</li>
          {/* {quantCarrinho} */}
          <BiCart className="icone" onClick={()=>mudarTela(tela.telaCarrinho)}  />  
          </span>
         )
      
         
      case tela.telaCarrinho:
         return <BiHome className="icone" onClick={()=>mudarTela(tela.telaInicial)}/>
         
      default:
        return <BiHome className="icone" onClick={()=>mudarTela(tela.telaInicial)}  />

       
    }
  
  }

    return (

        <Container>
          <h1 className="cabecalho">Loja 51  </h1>
          {icone()}  
        </Container>    
    )
}