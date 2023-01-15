import React, { useEffect } from "react";
import { Header } from "./componentes/Header/Header";
import { Filtro } from "./componentes/Filtro/Filtro";
import { Main } from "./componentes/Main/Main";
import camisas from "./camisas.json"

import { useState } from "react";
import { Carrinho } from "./componentes/Carrinho/Carrinho";

import TelaFinal from "./componentes/TelaFinal/TelaFinal";
import { tela} from "./uteis/Uteis"

export default function App() {
  const [name , setName]= useState("")
  const [ordem, setOrdem]=useState("")
  const [carrinho, setCarrinho]=useState([])
  const [maiorPreco, setMaiorPreco]= useState("")
  const [menorPreco, setMenorPreco]= useState("")
  const [valorCondicional, setValorCondicional] = useState(tela.telaInicial)

  // apagar produto do carrinho
  const removerCamisa = (camisas) => {
    const index = carrinho.findIndex((novaCamisa) => {
      return novaCamisa === camisas;
    });
    const camisaFilter = [...carrinho];
    camisaFilter.splice(index, 1);
    setCarrinho(camisaFilter);
 
     if(camisaFilter.length === 0){
   localStorage.removeItem("carrinho")

    }
  };

  const mudarTela = (valor) => {
    setValorCondicional(valor)
    // localStorage.clear()
    // setCarrinho([])
  }

  const voltarHome =(valor)=>{
    setValorCondicional (valor)
     localStorage.clear()
    setCarrinho([])

  
  }

  // adicionar produto ao carrinho
  function addCarrinho(item){

    carrinho.map((i)=>{
      if(i.id === item.id){
        item.quant=item.quant + i.quant
        item.total=item.total + i.total
      }
    })
    const novoCarrinho=  carrinho.filter((i)=>{
      return i.id !== item.id
    })
    setCarrinho([...novoCarrinho,item])
  }
  

  // atualizar tela e salvar dados
  useEffect(() => {
    if (carrinho.length > 0) {
      const carrinhoString = JSON.stringify(carrinho);
      localStorage.setItem('carrinho', carrinhoString)
    }   
  }, [carrinho]);
  
  useEffect(() => {
    const carrinhoBuscar = localStorage.getItem('carrinho')
    const carrinhoArray = JSON.parse(carrinhoBuscar);
    if (carrinhoArray) {
      setCarrinho(carrinhoArray);
    }
  }, []);


const renderizaTela = () => {
  switch (valorCondicional) {
    case tela.telaInicial:
    
        return (
        <>
      <Header mudarTela={mudarTela} quantCarrinho={carrinho.length} valorCondicional={valorCondicional}/>
      <Filtro name={name} setName={setName} ordem={ordem} setOrdem={setOrdem}
         camisas={camisas} setMaiorPreco={setMaiorPreco} setMenorPreco={setMenorPreco} />

        <Main name={name}
        ordem={ordem} addCarrinho={addCarrinho} setCarrinho={setCarrinho}
        carrinho={carrinho} camisas={camisas} maiorPreco={maiorPreco} menorPreco={menorPreco}mudarTela={mudarTela} />

      </>
        )
    case tela.telaCarrinho:
      return (
        <>
      <Header mudarTela={mudarTela} />
      <Carrinho carrinho={carrinho} 
      mudarTela={mudarTela} 
      setCarrinho={setCarrinho} removerCamisa={removerCamisa}/>
      </>
        )
    case tela.telaFinal:
      return <TelaFinal 
      // mudarTela={mudarTela}
      voltarHome={voltarHome}
      />
    
  }
}

  return (
    
      <div >
        {renderizaTela()}
      </div>
      
    
  );
}
