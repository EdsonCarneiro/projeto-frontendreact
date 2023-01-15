import {Filtragem , InputName, InputPreco} from "./styled"


 export function Filtro ({name,setName , ordem , setOrdem, setMaiorPreco,setMenorPreco }){
  

    const handBuscarMaiorPreco=(event)=>{
        setMaiorPreco(event.target.value)
        
    }

    const handBuscarMenorPreco=(event)=>{
        setMenorPreco(event.target.value)
      
        
    }

    const handBuscarNome=(event)=>{
        setName(event.target.value)
    }

    const handOrdem=(event)=>{
        setOrdem(event.target.value)

    }
    
    return (
        <Filtragem>

             <InputPreco>
             <label>Maior preco</label>
             <input type="number"
              placeholder="R$ 1000,00"  
              onChange={handBuscarMaiorPreco}></input>

              <label>Menor Preço</label>
              <input type="number"
              placeholder="R$ 100,00" 
               onChange={handBuscarMenorPreco}></input>
             </InputPreco>

             <InputName>
             <input
              type="text"
              placeholder="Buscar por nome" 
              value={name} 
              onChange={handBuscarNome}></input>
             
             </InputName>
           

            <select className="select" value={ordem} onChange={handOrdem}>
                <option value="">ordenar</option>
                <option value="crescente">crescente</option>
                <option value="decrescente">decrescente</option>
           
            </select>
        </Filtragem>
    )
 }