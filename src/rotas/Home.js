import Search from '../components/Search';
import UltimosLancamentos from '../components/UltimosLancamentos';
import styled from 'styled-components';

const HomeContainer = styled.div`
      width: 100vw;
      height: 100vh;
      background-image: linear-gradient(90deg, #002f52 35%, #326589);
`

function Home() {
  return (
      <HomeContainer>
        <Search/>
        <UltimosLancamentos/>
      </HomeContainer>
  );
}

export default Home;