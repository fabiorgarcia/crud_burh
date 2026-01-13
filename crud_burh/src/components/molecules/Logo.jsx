import styled from "styled-components";

export const Logotipo = styled.div `
    font-family: "League Gothic", sans-serif;
    font-size: 60px;
    background-color: var(--reddish);
    color: var(--ice);
    padding: 5px 15px;
    display: -webkit-inline-box;
`

function Logo() {
    return (
        <Logotipo>/CRUD</Logotipo>
    )
}

export default Logo