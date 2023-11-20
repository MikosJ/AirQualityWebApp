import styled from "styled-components";

export const StyledMap = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
`

export const PopupContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const LocalizationText = styled.p`
  font-weight: bold;
  max-width: 65%;
  font-size: 14px;
`
export const ParameterTextContainer = styled.div`
  max-width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
export const ParameterText = styled.div`
  padding: 1px;
  font-size: 14px;
  
`
export const BlackText = styled.p`
  color: black;
  font-weight: bold;
  font-size: 16px;
`
export const ColoredText = styled.p<{color: string}>`
  color: ${props => props.color};
  -webkit-text-stroke: 1px black;
  font-weight: bold;
  font-size: 16px;
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`
export const StatusAndTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`