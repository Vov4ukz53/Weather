import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  padding: 15px;
  border: 1px solid ${({ theme }) => theme.colors.blue};
  border-radius: 5px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
    padding: 10px;
  }
`;