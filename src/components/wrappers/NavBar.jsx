import styled from 'styled-components'

const Wrapper = styled.nav`
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;

  .nav {
    background-color: darkolivegreen;
    color: white;
    border: 4px solid #333;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    padding: 0.5rem 1rem 0 0.5rem;
  }
  
  img {
    height: 100px;
  }
  .nav ul {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    gap: 1rem;
  }
  
  .links {
   	color: inherit;
    text-decoration: none;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0.25rem;
  }
  
  .links.active {
    text-decoration: line-through;
  }
  
  .links:hover {
    background: #333;
    cursor: pointer;
  }

  
`

export default Wrapper