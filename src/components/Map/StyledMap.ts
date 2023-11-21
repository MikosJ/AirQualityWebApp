import styled from "styled-components";
import {Popup} from "react-leaflet";

export const StyledMap = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
`

export const StyledPop = styled(Popup)`
  border-radius: 0;
  display: flex;

  .leaflet-popup-content-wrapper {
    padding: 10px;
    display: flex;
    border-radius: 10px;
    background-color: hsl(111, 33%, 68%);
    //background: linear-gradient(45deg, rgba(255, 255, 255, 0.9) 0%, rgba(89, 189, 243, 0.9) 30%, rgba(154, 199, 255, 0.9) 70%, rgba(255, 255, 255, 0.9) 100%);
    border: 1px rgba(243, 243, 243, 0.73) solid;
    box-shadow: rgba(17, 17, 17, 0.46) 5px 5px 5px 5px;
  }

  .leaflet-popup-tip-container {
    visibility: hidden;
  }

  .leaflet-popup-content {
    margin: 0;
    display: flex;
    flex-direction: column;
    width: fit-content;
  }
`;


export const LocalizationText = styled.p`
  font-weight: bold;
  font-size: 16px;
  display: flex;
`
export const ParameterTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  
`
export const ParameterText = styled.div`
  font-size: 16px;
  text-overflow: ellipsis;
  text-overflow-ellipsis: 1;
  
`
export const BlackText = styled.p`
  color: black;
  font-size: 16px;
`
export const ColoredText = styled.div<{color: string}>`
  color: ${props => props.color};
  display: flex;
  //-webkit-text-stroke: 0.5px rgba(0, 0, 0, 0.72);
  font-size: 16px;
  justify-content: center;
  align-items: center;
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`