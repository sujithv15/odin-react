import styled from "styled-components";

import background from '../../apps/rps/assets/images/background-ring.jpg'

const Wrapper = styled.nav`

  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;

  .img-ring {
    opacity: 0.30;
    position: absolute;
    width: 150%;
    height: 150%;
  }
  
  .info {
  	margin: 6rem;  
  }
  
  .game {
    display: flex;
    gap: 5rem;
    justify-content: center;
    align-items: center;
    max-width: 1280px;
    height: 720px;
    flex: 1;
    position:relative;
}
  
  .score {
    display: flex;
    justify-content: space-around;
    margin: 2rem;
  }

  img {
    height: 320px;
    width: 320px;
  }

  .player{
  }
  
  .circle {
    border-radius: 160px;
    border: 5px double gray;
  }

`

export default Wrapper