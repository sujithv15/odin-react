import styled from 'styled-components'

const Wrapper = styled.nav`
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  .grid {
    display: grid;
  }
  
  
  
  .black {
    background-color: black;
  }
  
  .white {
    background-color: white;
    border: black solid 1px;
  }
  
  .white a:hover a.focus {
    background-color: gray;
  }
  
`

export default Wrapper