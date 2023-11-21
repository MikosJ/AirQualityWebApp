import styled from "styled-components";

// export const SelectContainer = styled.div`
//   width: 300px;
// `
// export const AverageDataContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   gap: 5rem;
//   align-items: center;
//   flex-direction: column;
//
// `
// export const ValuesContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   gap: 1rem;
// `
//
// export const ValueText = styled.p`
//   font-size: 24px;
// `
export const SelectContainer = styled.div`
  width: 600px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  gap: 1rem;
`;

export const TextAndSelect = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 5rem;
  align-items: center;
`


export const AverageDataContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5rem;
  align-items: center;
  flex-direction: column;
`;

export const ValuesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  min-width: 650px;
`;

export const ValueText = styled.p`
  font-size: 18px;
  margin: 0;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

export const TableHeader = styled.th`
  background-color: #f2f2f2;
  padding: 12px;
  text-align: left;
  font-weight: bold;
`;

export const TableData = styled.td`
  border-top: 1px solid #ddd;
  padding: 12px;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

export const BoldText = styled.span`
  font-weight: bold;
`;

export const StyledInput = styled.input`
  font-family: inherit;
  font-size: 16px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
  }

  &::placeholder {
    color: #aaa;
  }
`;
