import styled from "styled-components";

export const Section = styled.section`
  margin: 30px 0;
  padding: 20px;
  background: ${({theme}) => theme.colors.white};
  border-radius: 5px;
  box-shadow: 2px 2px 5px ${({theme}) => theme.colors.white};

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
    padding: 10px;
  }
`;