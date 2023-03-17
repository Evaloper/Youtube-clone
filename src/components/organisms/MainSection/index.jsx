import React, { useState } from "react";
import { Button, Icon } from "../../atoms";
import { IconText } from "../../molecules/IconText";
import CardTemplate from "../../templates/Card";
import ReelsTemplate from "../../templates/Reels";
import "./verticalbar.css";

function MainSection() {
  return (
    <div className="main flex">
      {/* Start of Horizontal Side Bar */}
      <div className="content-nav">
        <div>
          <IconText type="Home"/>
        </div>
        <div>
          <IconText type="Short-video"/>
        </div>
        <div>
          <IconText type="Subscription"/>
        </div>
        <div>
          <IconText type="Library"/>
        </div>
      </div>
      {/* End of horizontal sidebar */}


      {/* Start of Main Content */}
      <div className="content">
       <div>
          <div className="chips-wrapper">
            <div className="nxt-arw">
              <Icon type="prev-arrow" onclick={{}} />
            </div>
            <div className="chips">
              <a className="btn" >
                <Button id="darkbg">All</Button>
              </a>
              <a className="btn">
                <Button>Live</Button>
              </a>
              <a className="btn">
                {" "}
                <Button>Music</Button>
              </a>
              <a className="btn">
                <Button>Contemporary Music</Button>
              </a>
              <a className="btn">
                <Button>Nathaniel Bassey</Button>
              </a>
              <a className="btn">
                <Button>ReactJS</Button>
              </a>
              <a className="btn">
                <Button>Worship Music</Button>
              </a>
              <a className="btn">
                <Button>Amapiano Music</Button>
              </a>
              <a className="btn">
                <Button>Javascript</Button>
              </a>
              <a className="btn">
                <Button>Nollywood</Button>
              </a>
              <a className="btn">
                <Button>Computer Programming</Button>
              </a>
              <a className="btn">
                <Button>Stocks</Button>
              </a>
              <a className="btn">
                <Button>Forex Trading</Button>
              </a>
              <a className="btn">
                <Button>Nollywood</Button>
              </a>
              <a className="btn">
                <Button>Judikay</Button>
              </a>
              <a className="btn">
                <Button>Gaming</Button>
              </a>
              <a className="btn">
                <Button>Chill-out Music</Button>
              </a>
              <a className="btn">
                <Button>Nigeria History</Button>
              </a>
              <a className="btn">
                <Button>Guc</Button>
              </a>
              <a className="btn">
                <Button>Technical Writing</Button>
              </a>
              <a className="btn">
                <Button>Justice Court</Button>
              </a>
            </div>
            <div className="nxt-arw">
              <Icon type="next-arrow" onclick={{}} />
            </div>
          </div>
          <div className="card-temp">
            <CardTemplate />
            <CardTemplate />
            <ReelsTemplate />
            <CardTemplate />
            <CardTemplate />
          </div>
        </div>
      </div>
      {/* End of main content */}
    </div>
  );
}

export default MainSection;
