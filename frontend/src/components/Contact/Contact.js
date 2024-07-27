import React, { useState } from "react";
import { ContactWrapper, Email } from "./ContactElements";
import { MdContentCopy } from "react-icons/md";
import { IconButton, Tooltip } from "@mui/material";
import Zoom from "@mui/material/Zoom";
import axios from "axios";
import ScrollAnimation from "react-animate-on-scroll";

function Contact() {
  const [showTooltip, setShowTooltip] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText("kemalkujovic99@gmail.com");
    setShowTooltip(true);
    setTimeout(() => {
      setShowTooltip(false);
    }, 700);
  };

  const onSubmit = async () => {
    const data = {
      name: "Kemal",
      email: "kemalkujovic1111@gmail.com",
      message: "Hello from node.js server!",
    };
    try {
      const res = await axios.post("http://localhost:3000/send", data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContactWrapper id="contact">
      <div className="Container">
        <div className="SectionTitle">Get In Touch</div>
        <ScrollAnimation animateIn="fadeIn">
          <div className="BigCard">
            <Email>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  columnGap: "20px",
                  rowGap: "10px",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <span>kemalkujovic99@gmail.com</span>
                <Tooltip
                  PopperProps={{
                    disablePortal: true,
                  }}
                  open={showTooltip}
                  onClose={() => setShowTooltip(false)}
                  title="Copied!"
                  TransitionComponent={Zoom}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  placement="bottom"
                >
                  <IconButton onClick={copyToClipboard}>
                    <MdContentCopy
                      size={25}
                      style={{ cursor: "pointer", color: "#151418" }}
                    />
                  </IconButton>
                </Tooltip>
              </div>
              <a
                className="btn PrimaryBtn btn-shadow"
                href="mailto:kemalkujovic99@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send Email
              </a>
            </Email>
            <button onClick={onSubmit}>SEND MAIL</button>
          </div>
        </ScrollAnimation>
      </div>
    </ContactWrapper>
  );
}

export default Contact;