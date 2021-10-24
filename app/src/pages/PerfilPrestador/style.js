import styled from "styled-components";

export const Overlay = styled.div`
  width: 100%;
  height: auto;
  display: flex;

  @media(min-width: 320px) and (max-width: 890px){
    flex-direction: column;
  }
`;