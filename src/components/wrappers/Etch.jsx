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
  
  .box {
    border: lightgrey groove 1px;
  }
  
  .box:hover {
    color: red;
  }
  
`

export default Wrapper