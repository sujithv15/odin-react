import styled from 'styled-components'

const Wrapper = styled.nav`
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  box-sizing: border-box;


  
  .container img {
    width: 25%;
    height: auto;
  }
  
  h1 {
    text-transform: uppercase;
	font-family: serif;
    color: papayawhip;
  }
  
  p {
    font-family: serif;
    color: papayawhip;
    line-height: 1.5;
    padding: 4rem
  }
  
  .link {
    text-decoration: none;
  }
`

export default Wrapper