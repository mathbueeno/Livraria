import sacola from '../../imagens/sacola.svg'
import perfil from '../../imagens/perfil.svg'
import styled from 'styled-components'

const Icone = styled.li`
    margin-right: 40px;
    width: 25px;
    align-items: center;
`

const Icones = styled.ul`
    display: flex;
    align-items: center;
`

function IconsHeader() {
    const icones = [sacola, perfil]
    return(
        <Icones>
          {icones.map((icon) => (
            <Icone><img src={icon}></img></Icone>
          ))}
        </Icones>
    )
}
export default IconsHeader