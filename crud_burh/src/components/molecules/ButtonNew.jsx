import styled from "styled-components";

export const Enabled = styled.button `
    background-color: var(--reddish);
    color: var(--ice);
    border-color: var(--reddish);
`

function ButtonNew() {
    return (
        <Enabled><span className="material-symbols-outlined icon">add</span> Novo</Enabled>
    )
}

export default ButtonNew