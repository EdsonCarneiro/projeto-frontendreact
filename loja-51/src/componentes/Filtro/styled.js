import styled from "styled-components"

export const Filtragem =styled.div`
display: flex;
padding-top: 20px;
padding-left: 60px;
padding-right: 10px;
gap: 40px;

@media (min-width: 370px) {
    flex-wrap: wrap;
  
  }

.select{
  width: 300px;
  border: 1px solid #444343;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 5px;
  padding: 30px;
 font-size: 20px;

}


`

export const InputName = styled.div`
width: 300px;
  height: 20px;
  border: 1px solid #444343;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 5px;
  padding: 30px;


`
export const InputPreco=styled.div`
width: 300px;
  height: 20px;
  border: 1px solid #444343;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 5px;
  padding: 30px;
 width: auto;
 display: flex;
gap: 10px;
`

