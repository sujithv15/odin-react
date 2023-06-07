import styled from 'styled-components'

const Wrapper = styled.nav`
  height: var(--nav-height);
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #475569;
  background-image: radial-gradient(whitesmoke, #475569);
  display: flex;
  flex-direction: column;
  
  header, nav, main, footer {

    display: grid;
    place-content: center;
    grid-template-columns: 100%;
  }
  
  header, footer {
    position: sticky;
  }
  header {
    top: 0
  }
  
  nav {
	color: black;
    border-bottom: 2px solid black;
  }
  
  main {
    flex-grow: 1;
  }
  
  footer {
    bottom: 0;
  }
  
`

export default Wrapper