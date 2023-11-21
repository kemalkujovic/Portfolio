import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <ScrollAnimation animateIn="fadeInLeft">
            <Image src="/0.png" alt="man-svgrepo" />
          </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              Hello! My name is <strong>Kemal Kujovic</strong>. I am software
              developer from Serbia. Right now I'm focused on Frontend
              technologies, working with Next.js, React.js, Redux toolkit as
              state management, Responsive web design with Material UI and
              Bootstrap CSS frameworks. Also i have strong knowledge in working
              with API's. I am a fast learner and I enjoy learning new things
              from more experienced developers. I plan to start learning new
              technologies such as React Native.
            </ScrollAnimation>

            <br />
            <br />

            <br />
            <br />

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
