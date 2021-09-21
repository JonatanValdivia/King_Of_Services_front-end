import styled from "styled-components";

// export const Teste = styled.div`
//     width: 100px;
//     height: 100px;
//     background-color: red;

// `;

export const Overlay = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.section`
  min-width: 600px;
  min-height: 600px;
  max-height: calc(100vh - 20px);
  padding: 20px;

  z-index: 19;

  overflow-y: auto;

  background-color: white;
  box-shadow: 5px 5px 15px #b3b3b3;
  border-radius: 4px;

  position: relative;

`;
