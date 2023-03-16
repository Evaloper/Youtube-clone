import React from "react";
import { button } from "../../../theme/styleDefinition";
import { Icon, Image, Input } from "../../atoms";
import pics from "../../../assets/pics.jpg";
import "./Navbar.css";
import { IconText } from "../../molecules/IconText";
import { useState } from "react";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>

      {/* Start of Side Toggle Navigation Bar */}
      <div className={`vertical-bar ${sidebar ? "vertical-bar active" : ""}`}>
        <div className="flex flex-align margin-left" id="main">
          <a href="#" className="openbtn" onClick={showSidebar}>
            <Icon type="hamburger" width="20px" />
          </a>
          <div className="flex ytb-div">
            <Icon type="youtube" width="32px" style={{ fill: "red" }} />
            <p className="txt-youtube">
              YouTube<sup className="sup-txt">NG</sup>
            </p>
          </div>
        </div>
        <div className="padding-layout margin-left hvr-btn">
          <IconText type="home" />
        </div>

        <div className="padding-layout margin-left hvr-btn">
          <IconText type="short-video" />
        </div>
        <div className="padding-layout margin-left hvr-btn">
          <IconText type="subscription" />
        </div>
        <hr />
        <div className="padding-layout margin-left hvr-btn">
          <IconText type="library" />
        </div>
        <div className="padding-layout margin-left hvr-btn">
          <IconText type="History" />
        </div>
        <div className="padding-layout margin-left hvr-btn">
          <IconText type="yourvid" />
        </div>
        <div className="padding-layout margin-left hvr-btn">
          <IconText type="watchlater" />
        </div>
        <div className="padding-layout margin-left hvr-btn">
          <IconText type="likedvid" />
        </div>
        <div className="padding-layout margin-left hvr-btn">
          <IconText type="drop-arrow" />
        </div>
        <hr />
        <div className="padding-layout margin-left hvr-btn">
          <IconText type="trending" />
        </div>
        <div className="padding-layout margin-left hvr-btn">
          <IconText type="music" />
        </div>
        <div className="padding-layout margin-left hvr-btn">
          <IconText type="gaming" />
        </div>
        <div className="padding-layout margin-left hvr-btn">
          <IconText type="news" />
        </div>
        <div className="padding-layout margin-left hvr-btn">
          <IconText type="sports" />
        </div>
        <hr />
        <div className="padding-layout margin-left hvr-btn">
          <IconText type="settings" />
        </div>
        <div className="padding-layout margin-left hvr-btn">
          <IconText type="report" />
        </div>
        <div className="padding-layout margin-left hvr-btn">
          <IconText type="help" />
        </div>
        <div className="padding-layout margin-left hvr-btn">
          <IconText type="feedback" />
        </div>
        <div>
          <p style={{ textAlign: "center", fontSize: "12px" }}>
            © 2023 Google LLC
          </p>
        </div>
      </div>
      {/* End of toggle navigation bar */}

      {/* main Navigation Bar */}
      <div className="flex flex-center flex-between top-nav" id="mysidebar">
        <div className="flex flex-align" id="main">
          <a href="#" className="openbtn" onClick={showSidebar}>
            <Icon type="hamburger" width="20px" />
          </a>
          <div className="flex ytb-div">
            <Icon type="youtube" width="32px" style={{ fill: "red" }} />
            <p className="txt-youtube">
              YouTube<sup className="sup-txt">NG</sup>
            </p>
          </div>
        </div>
        <div className="flex flex-center margin-auto">
          <div className="search-div">
            <form action="" className="flex-center">
              <Input
                type="text"
                name="Search"
                className="nav-inp"
                placeholder="Search"
              />
              <Input type="button" className="btn-srch" placeholder="" />
              <Icon type="search" className="icon-srch" width="20px" />
            </form>
          </div>
          <div className="">
            <a href="">
              <Icon type="mic" />
            </a>
          </div>
        </div>
        <div className="flex flex-align">
          <Icon type="video" width="20px" className="left-margin" />
          <Icon type="bell" width="20px" className="left-margin" />
          <div className="pfile-div">
            <Image src={pics} className="pfile-pics left-margin" width="20px" />
          </div>
        </div>
      </div>
      {/* End of main navigation bar */}
    </div>
  );
}

export default Navbar;
