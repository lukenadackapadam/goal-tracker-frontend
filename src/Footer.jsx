import { AwesomeButtonSocial } from "react-awesome-button";
import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";

export function Footer() {
  return (
    <div id="footer">
      {/* <p id="copyright">Copyright 2023</p> */}
      <AwesomeButtonSocial icon="false" cssModule={AwesomeButtonStyles} type="reddit">
        Reddit
      </AwesomeButtonSocial>
      <AwesomeButtonSocial id="link" cssModule={AwesomeButtonStyles} type="linkedin">
        Linkedin
      </AwesomeButtonSocial>
      <AwesomeButtonSocial id="github" cssModule={AwesomeButtonStyles} type="github">
        Github
      </AwesomeButtonSocial>
      <p id="copyright">Copyright 2023</p>
    </div>
  );
}
