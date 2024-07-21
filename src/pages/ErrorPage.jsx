import React, { useContext } from "react";
import arrowRight from "../assets/arrowRight.png";
import {
  CenteredDiv,
  Column,
  Heading,
  HomeLink,
  HomeLinkText,
  Image,
  LargeHeading,
  Text,
  Wrapper,
} from "./ErrorElements";
import Header from "../components/Header/Header";
import { DropDownContext } from "../context";
import Dropdown from "../components/Dropdown/Dropdown";

const ErrorPage = () => {
  const { isOpen, toggle } = useContext(DropDownContext);

  return (
    <main>
      <div className="Container" style={{ padding: 0 }}>
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <Header toggle={toggle} />
        <Wrapper>
          <Column>
            <Heading>Oops, something went wrong!</Heading>
            <Text>
              The page you are looking for is not available. It might have been
              removed, or you may have typed the address incorrectly.
            </Text>
            <HomeLink to="/">
              <Image src={arrowRight} alt="" />
              <HomeLinkText>Go to Home Page</HomeLinkText>
            </HomeLink>
          </Column>
          <CenteredDiv>
            <LargeHeading>404</LargeHeading>
          </CenteredDiv>
        </Wrapper>
      </div>
    </main>
  );
};

export default ErrorPage;
