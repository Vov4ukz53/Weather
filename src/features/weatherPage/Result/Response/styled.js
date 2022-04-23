import styled from "styled-components";

export const Title = styled.h2`
  margin: 0px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
    font-size: 20px;
  }
`;

export const Info = styled.h3`
  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
    font-size: 18px;
  }
`;