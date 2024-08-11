import React, { useRef, useState } from "react";
import { ContactWrapper, Email } from "./ContactElements";
import { MdContentCopy } from "react-icons/md";
import { IconButton, Tooltip } from "@mui/material";
import Zoom from "@mui/material/Zoom";
import axios from "axios";
import ScrollAnimation from "react-animate-on-scroll";

function Contact() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [errors, setErrors] = useState({});
  const [inputValue, setInputValue] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const nameValidation = (value) => {
    return value.trim().length < 3
      ? "Ime mora imati najmanje 3 karaktera."
      : "";
  };

  const emailValidation = (value) => {
    return value.trim().length < 3
      ? "Ime mora imati najmanje 3 karaktera."
      : "";
  };

  const messageValidation = (value) => {
    return value.trim().length < 10
      ? "Ime mora imati najmanje 3 karaktera."
      : "";
  };

  const validation = {
    user_name: nameValidation,
    user_email: emailValidation,
    message: messageValidation,
  };

  const refs = {
    user_name: useRef(null),
    user_email: useRef(null),
    message: useRef(null),
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText("kemalkujovic99@gmail.com");
    setShowTooltip(true);
    setTimeout(() => {
      setShowTooltip(false);
    }, 700);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    let fristErorr = null;

    Object.keys(inputValue).forEach((field) => {
      const error = validation[field](inputValue[field]);
      if (error) {
        newErrors[field] = error;
        if (!fristErorr) {
          fristErorr = field;
        }
      }
    });

    setErrors(newErrors);

    if (fristErorr) {
      refs[fristErorr].current.focus();
    }

    const formIsValid = Object.values(errors).every((error) => !error);

    const data = {
      name: inputValue.user_name,
      email: inputValue.user_email,
      message: inputValue.message,
    };

    if (formIsValid) {
      try {
        const res = await axios.post("http://localhost:3000/send", data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));

    const error = validation[name](value);
    setErrors({ ...errors, [name]: error });
  };

  return (
    <ContactWrapper id="contact">
      <div className="Container">
        <div className="SectionTitle">Get In Touch</div>
        <ScrollAnimation animateIn="fadeIn">
          <div className="BigCard">
            <form onSubmit={handleSubmit}>
              <div className="card-contact">
                <label htmlFor="user_name">Name*</label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  required
                  onChange={(e) => handleChange(e)}
                  ref={refs.user_name}
                  value={inputValue.user_name}
                />
                {errors.user_name && (
                  <p style={{ color: "red" }}>{errors.user_name}</p>
                )}
              </div>
              <div className="card-contact">
                <label htmlFor="user_email">E-mail*</label>
                <input
                  type="text"
                  id="email"
                  name="user_email"
                  required
                  onChange={(e) => handleChange(e)}
                  ref={refs.user_email}
                  value={inputValue.user_email}
                />
                {errors.user_email && (
                  <p style={{ color: "red" }}>{errors.user_email}</p>
                )}
              </div>
              <div className="card-contact">
                <label htmlFor="message">Message*</label>
                <input
                  type="text"
                  id="message"
                  name="message"
                  required
                  onChange={(e) => handleChange(e)}
                  value={inputValue.message}
                  ref={refs.message}
                />
                {errors.message && (
                  <p style={{ color: "red" }}>{errors.message}</p>
                )}
              </div>
              <div className="button-wrap">
                <button>SEND</button>
              </div>
            </form>
            {/* <Email>
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
            </Email> */}
          </div>
        </ScrollAnimation>
      </div>
    </ContactWrapper>
  );
}

export default Contact;
