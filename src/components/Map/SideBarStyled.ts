import styled from "styled-components";

export const SideBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 6%;
  height: 100vh;
  background-color: rgb(188, 216, 176);
  min-width: fit-content;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const SideBarTitle = styled.h2`
  padding-top: 1rem;
  text-shadow: #a4a4a4 2px 2px 5px;
  font-size: 32px;

`
export const Button = styled.button`
  background-color: hsl(111, 33%, 68%);
  border: 1px solid hsl(111, 33%, 68%);
  white-space: normal;
  width: 65%;
  color: hsla(0, 0%, 5%, 0.79);
  font-weight: bold;
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
    background-color: hsl(91, 57%, 84%);
    transform: translateY(-3px)
  }

  &:active {
    background-color: hsl(113, 33%, 64%);
  }

  @media screen and (max-width: 45em) {
    padding: 1rem 1rem;
    font-size: 1.5rem;
    margin: 0.5rem;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`