import styled from "styled-components";

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
    font-size: 22px;
    margin: 0px;
  }
`;