import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Opcao = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
`

const Opcoes = styled.ul`
    display: flex;
`

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'ESTANTE']

function OpcoesHeader() {
    return(
        <Opcoes>
          {/* Varrer a lista de arrays */}
          {textoOpcoes.map((text) => (
            <Link to={`/${text.toLowerCase()}`}><Opcao><p>{text}</p></Opcao></Link>
          ))}      
        </Opcoes>
    )
}

export default OpcoesHeader