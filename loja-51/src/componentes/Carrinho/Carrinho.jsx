import { useEffect } from "react"
import { tela } from "../../uteis/Uteis"
import { ContainerCarrinho , Cabecalho } from "./styled"

import { FiTrash2 } from "react-icons/fi";
export function Carrinho({ carrinho, mudarTela, removerCamisa }) {


    const soma = (car) => {
        let total = 0
        car.map((item) => {
            total += item.total
        })
        console.log("chamando função soma")
        return total
    }

    useEffect(() => {
        console.log("carrinho", carrinho)

    }, [carrinho])

    console.log(carrinho)

    return (
     <ContainerCarrinho>
            <Cabecalho><h1>Seus Produtos:</h1></Cabecalho>
            {carrinho.map((item) => {
                return <div className="container" key={item.id}>
                    {
                        <div className="infos">
                            <img className="imagem" src={item.imagens} />
                            <p className="informacoes">
                           <h1>{item.nome}</h1>  
                            <li>Quantidade: {item.quant}</li> 
                           <li>Valor Unitario: {item.preco}</li>
                            <li>Total item: {item.total}</li>
                            <li><FiTrash2 className="removerButton" onClick={() => removerCamisa(carrinho)} /></li>
                             </p>
                            
                            
                            
                        </div>
                    }
                </div>
            })}
            <p className="total">Total: {soma(carrinho)}</p>
            <button className="mudartela" onClick={() => mudarTela(tela.telaFinal)}>Finalizar Compra</button>
        </ContainerCarrinho>
    )
}