import { useState } from "react"
import { Item } from "./Item"

export function Cards({camisas,addCarrinho}){
    const [quant,setQuant]=useState(1)

    const adicionaCarrinho=()=>{
       
         const item={
                id:camisas.id,
                imagens:camisas.imagem,
                nome:camisas.name,
                preco:camisas.valor,
                total:camisas.valor * quant,
                quant:quant
            
            }

            addCarrinho(item)
 
  } 

    return(
       <Item camisas={camisas} adicionaCarrinho={adicionaCarrinho}/>
    )
    }