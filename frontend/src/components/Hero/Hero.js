import React, { useContext } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
} from "./HeroElements";
import { DropDownContext } from "../../context";

function Hero() {
  const { isOpen, toggle } = useContext(DropDownContext);

  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <h1>Hi, I'm Kemal.</h1>
            <h5>A Frontend Developer.</h5>
          </HeroLeft>
          <HeroRight>
            <Image style={{ height: "430px" }} src="/0.png" alt="man-svgrepo" />
          </HeroRight>
        </HeroWrapper>
      </HeroContainer>
    </main>
  );
}

export default Hero;
