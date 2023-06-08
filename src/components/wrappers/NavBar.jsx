import styled from 'styled-components'

const Wrapper = styled.nav`
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;

  .links {
    background: gold;
    border: 4px solid #333;
    display: flex;
    align-items: center;
    justify-content: space-around;
    line-height: 3rem;

  }
  
  .links a:focus, a:hover {
    background: #333;
    cursor: pointer;
    line-height: 1.5rem;
  }

  
`

export default Wrapper