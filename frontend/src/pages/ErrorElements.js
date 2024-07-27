import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  color: white;
  @media (min-width: 770px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const Heading = styled.h1`
  font-size: 3rem;
`;

export const Text = styled.p`
  font-size: 1.125rem;
`;

export const HomeLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const HomeLinkText = styled.p`
  font-size: 1.125rem;
  font-weight: 600;
`;

export const CenteredDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LargeHeading = styled.h1`
  font-size: 12.5rem;
`;

export const Image = styled.img`
  max-width: 40px;
  filter: invert(1);
`;
