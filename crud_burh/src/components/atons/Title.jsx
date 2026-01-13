import styled from "styled-components";

export const TitleH1 = styled.h1 `
    color: var(--reddish);
    font-size: 4rem;
    font-weight: 500;
`

function Title() {
    return (
        <TitleH1>Usuário</TitleH1>
    )
}

export default Title