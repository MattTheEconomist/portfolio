import { IconContext } from "react-icons";
import { GoMarkGithub } from "react-icons/go";
import { SiGmail } from "react-icons/si";

export const Footer = () => {
  return (
    <div id="contactSection">
      <h1 className="sectionTitle" id="contactTitle">
        Contact
      </h1>
      <p>Let's build something great together! </p>
      <p>Please don't hesitate to contact me with project ideas</p>
      <p>
        Feel free to checkout my{" "}
        <a
          href="https://github.com/MattTheEconomist"
          target="_blank"
          className="textLink"
        >
          Github{" "}
        </a>{" "}
        or send me an email at{" "}
        <a href="mailto: mattashford1@gmail.com" className="textLink">
          mattashford1@gmail.com
        </a>
      </p>

      <div id="allFooterIcons">
        <IconContext.Provider value={{ size: "4rem", className: "footerIcon" }}>
          <a
            href="https://github.com/MattTheEconomist"
            className="footerIconLink"
            target="_blank"
          >
            <div className="footerIconContainer">
              <GoMarkGithub />
            </div>
          </a>
        </IconContext.Provider>
        <IconContext.Provider value={{ size: "4rem", className: "footerIcon" }}>
          <a href="mailto: mattashford1@gmail.com" className="footerIconLink">
            <div className="footerIconContainer">
              <SiGmail />
            </div>
          </a>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Footer;
