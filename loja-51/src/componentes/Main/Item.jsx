
export function Item ({camisas, adicionaCarrinho}){

    return(
        <div className="todos-cards">   
           <img src={camisas.imagem} alt=""/>
         <ul>  
          <li>{camisas.name}</li> 
             
             <li>valor:{camisas.valor}</li>
             <li><button className="botao" onClick={adicionaCarrinho}>adicionar no carrinho</button></li>
         </ul>
      </div>   
    )
}