import styled from 'styled-components'

const Wrapper = styled.nav`
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
  .grid-nums {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  
  .grid-ops {

  }
  
  .numbers {
    padding: 2rem;
  }

`

export default Wrapper