import styled from "styled-components";

export const SideBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 6%;
  height: 100vh;
  background: linear-gradient(to bottom, rgba(186, 253, 232, 0.5), #94f694, #c5fde9);
  min-width: fit-content;
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const SideBarTitle = styled.h2`
  padding-top: 1rem;
  text-shadow: #01ab34 2px 2px;

`
export const Button = styled.button`
  background-color: hsl(165, 76%, 31%);
  border: 1px solid hsl(146, 58%, 92%);
  white-space: normal;
  width: 50%;
  color: hsla(150, 14%, 97%, 1);
  cursor: pointer;
  outline: none;
  font-size: 16px;
  text-shadow: 0.1rem 0.1rem 0.5rem hsla(0, 0%, 0%, 0.5);
  letter-spacing: 0.1rem;
  border-radius: 0.5rem;
  user-select: none;
  padding: 1.5rem 2rem;
  margin: 1rem;
  transition: all 0.1s ease-in;

  ::-moz-focus-inner {
    border: 0;
  }

  &:hover {
    background-color: hsl(164, 35%, 70%);
    transform: translateY(-3px)
  }

  &:active {
    background-color: hsl(194, 61%, 62%);
  }

  @media screen and (max-width: 45em) {
    padding: 1rem 1rem;
    font-size: 1.5rem;
    margin: 0.5rem;
  }
`

export const ColoredButton = styled(Button)`
 text-decoration: none;
 background-color: hsla(189, 85%, 28%, 1);
 box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.0125),
  0 1px 1px rgba(0, 0, 0, 0.05);
 border-bottom-width: 0.5rem;

 &:hover {
  background-color: hsla(189, 85%, 32%, 1);
 }

 &:active {
  border-bottom-width: 0.1rem;
  border-top-width: 0.5rem;
 }
`

export const ButtonContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
  align-items: center;
`