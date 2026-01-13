import styled from "styled-components";

export const DarkBackground = styled.div `
  width: 100% !important;
  height: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  top: 0;
`

function DarkBg() {
    return (
        <DarkBackground></DarkBackground>
    )
}

export default DarkBg