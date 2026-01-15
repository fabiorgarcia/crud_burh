import styled from 'styled-components';

export const DivForm = styled.div `
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
`
export const DivGrid = styled.div `
    display: flex;
    justify-content: space-between;
    margin: 40px 0 70px 0;
`
export const DivRadioButton = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    max-width: 60px;
`
export const DivClose = styled.div `
    position: relative;
    text-align: right;
    cursor: pointer;
`
export const MsnSucess = styled.h1 `
    font-size: 45px;
    font-weight: 500;
    animation-name: fadeIn;
    animation-duration: 1.5s;
    animation-fill-mode: forwards;
    text-align: center;
    max-width: 400px;
`

export const NavMaster = styled.nav `
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    border-bottom: 1px solid var(--light-gray);
    padding-bottom: 10px;
`
export const MessageError = styled.nav `
    font-size: 12px;
    color: var(--reddish);
    padding: 5px 0;
`
export const TitleH1 = styled.h1 `
    color: var(--reddish);
    font-size: 3.5rem;
    font-weight: 500;
    margin: 0 0 15px 0;
`
export const Enabled = styled.button `
    background-color: var(--reddish);
    color: var(--ice);
    border-color: var(--reddish);
    width: 100%;
    padding: 20px;
`
export const BtnNewUser = styled.button `
    background-color: var(--reddish);
    color: var(--ice);
    border-color: var(--reddish);
`
export const Logotipo = styled.div `
    font-family: "League Gothic", sans-serif;
    font-size: 60px;
    background-color: var(--reddish);
    color: var(--ice);
    padding: 5px 15px;
    display: -webkit-inline-box;
`
export const DivEdit = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
`
export const DivSaveing = styled.div `
    display: flex;
    flex-direction: column;
    color: var(--white);
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 2;
    background-color: var(--reddish);
    top: 0;
    left: 0;
`
export const DivDelete = styled.div `
    display: flex;
    flex-direction: column;
    color: var(--dark-gray);
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 2;
    background-color: var(--ice);
    top: 0;
    left: 0;
`
export const DivDefault = styled.div `
    padding: 20px 10px;
`
export const DarkBackground = styled.div `
    width: 100% !important;
    height: 100%;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    left: 0;
    top: 0;
    animation-name: fadeIn;
    animation-duration: 1.5s;
    animation-fill-mode: forwards; 
`