import React from "react";
import styles from "./Profile.module.css";
import Profile from "./Profile";
import Adora from "../../assets/Adora.png";
import techqueenn from "../../assets/techqueenn.jpg"
import  profile2 from "../../assets/profile2.png"


const ProfileList = () => {
  return (
    <section className={styles.center}>
      <div>
        <h1>Team Members</h1>
        <div>
          <div className={styles["Profile-container"]}>
            <Profile
              image={Adora}
              name={"Adora Nwodo"}
              job={"Cloud Engineer"}
              link={"https://twitter.com/AdoraNwodo?s=20"}
              company={"Microsoft"}
              twitterLink = {"https://twitter.com/AdoraNwodo?s=20"}
              linkendin = {"https://www.linkedin.com/in/adoranwodo/?originalSubdomain=ng"}
              Ig = {"https://www.instagram.com/adoranwodo/?hl=en"}
            />
            <Profile
              image={techqueenn}
              name={"Chisom Nwokwu"}
              job={"Software Engineer"}
              link={"https://www.linkedin.com/in/chisom-c-nwokwu-4b5787186/?originalSubdomain=ng"}
              company={"Microsoft"}
              twitterLink = {"https://twitter.com/tech_queen?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"}
              linkendin = {"https://www.linkedin.com/in/chisom-c-nwokwu-4b5787186/?originalSubdomain=ng"}
              Ig = {"https://www.instagram.com/chisom__nw/"}
            />
            <Profile
              image={profile2}
              name={"John Doe"}
              job={"Software Engineer"}
              link={"https://www.linkedin.com/in/chisom-c-nwokwu-4b5787186/?originalSdomain=ng"}
              company={"Microsoft"}
              twitterLink = {"https://twitter.com/tech_queen?ref_src=twsrc%5Egoogle%7Ctwcamp%5erp%7Ctwgr%5Eauthor"}
              linkendin = {"https://www.linkedin.com/in/chisom-c-nwokwu-4b5787186/?originalSubdoin=ng"}
              Ig = {"https://www.instagram.com/chisom__n"}
            />
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileList;
