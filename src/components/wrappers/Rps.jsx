import styled from "styled-components";

import background from '../../pages/rps/assets/images/background-ring.jpg'

const Rps = styled.nav`

  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  display: flex;
  

  .img-ring {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  
  .info {
  	margin: 1rem;  
  }
  
  .game {
    display: flex;
    gap: 5rem;
    justify-content: center;
    align-items: center;
    height: 420px;
    flex: 1;

}
  
  .score {
    display: flex;
    justify-content: space-around;
    z-index: 1;

  }

  img {
    height: 320px;
    width: 320px;
  }

  .player {
    z-index: 1;
  }
  .cpu {
    z-index: 1;
  };

  
  .circle {
    border-radius: 160px;
    border: 5px double gray;
  }

`

export default Rps