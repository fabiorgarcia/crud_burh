import styled from "styled-components";

export const Enabled = styled.button `
    background-color: var(--reddish);
    color: var(--ice);
    border-color: var(--reddish);
    width: 100%;
    padding: 20px;
`

function ButtonAdd() {
    return (
        <Enabled>Salvar</Enabled>
    )
}

export default ButtonAdd