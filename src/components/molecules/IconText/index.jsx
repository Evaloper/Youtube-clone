import React, { Children } from "react";
import { Icon } from "../../atoms";

export const IconText = (props) => {
  const { type } = props;
  if (type === "Home") {
    return (
      <div className="">
        <Icon type="home" />
        <p style={{ marginBottom: "35px"}}>Home</p>
      </div>
    );
  }

  if (type === "Short-video") {
    return (
      <div className="">
        <Icon type="short-video" />
        <p style={{ marginBottom: "35px"}}>Shorts</p>
      </div>
    );
  }

  if (type === "Subscription") {
    return (
      <div className="" style={{ textAlign: "-webkit-center",
        marginLeft: "-15px"}}>
        <Icon type="subscription" />
        <p style={{ marginBottom: "35px"}}>Subscriptions</p>
      </div>
    );
  }
  
  if (type === "Library") {
    return (
      <div className="">
        <Icon type="library" />
        <p style={{marginBottom: "35px"}}>Library</p>
      </div>
    );
  }

  if (type === "home") {
    return (
      <div className="flex flex-align icon-txt">
        <Icon type="home" />
        <p style={{marginLeft: "15px", fontSize: "14px"}}>Home</p>
      </div>
    );
  }
  if (type === "short-video") {
    return (
      <div className="flex flex-align icon-txt">
        <Icon type="short-video" />
        <p style={{marginLeft: "15px", fontSize: "14px"}}>Shorts</p>
      </div>
    );
  }

  if (type === "subscription") {
    return (
      <div className="flex flex-align">
        <Icon type="subscription" />
        <p style={{marginLeft: "15px", fontSize: "14px"}}>Subscriptions</p>
      </div>
    );
  }

  if (type === "library") {
    return (
      <div className="flex flex-align">
        <Icon type="library" />
        <p style={{marginLeft: "15px", fontSize: "14px",}}>Library</p>
      </div>
    );
  }

  if (type === "History") {
    return (
      <div className="flex flex-align">
        <Icon type="History" />
        <p style={{marginLeft: "15px", fontSize: "14px",}}>History</p>
      </div>
    );
  }
  if (type === "yourvid") {
    return (
      <div className="flex flex-align">
        <Icon type="yourvid" />
        <p style={{marginLeft: "15px", fontSize: "14px",}}>Your video</p>
      </div>
    );
  }
  if (type === "watchlater") {
    return (
      <div className="flex flex-align">
        <Icon type="watchlater" />
        <p style={{marginLeft: "15px", fontSize: "14px",}}>Watch later</p>
      </div>
    );
  }
  if (type === "likedvid") {
    return (
      <div className="flex flex-align">
        <Icon type="likedvid" />
        <p style={{marginLeft: "15px", fontSize: "14px",}}>Liked videos</p>
      </div>
    );
  }
  if (type === "drop-arrow") {
    return (
      <div className="flex flex-align">
        <Icon type="drop-arrow" />
        <p style={{marginLeft: "15px", fontSize: "14px",}}>Show more</p>
      </div>
    );
  }
  if (type === "trending") {
    return (
      <div className="flex flex-align">
        <Icon type="trending" />
        <p style={{marginLeft: "15px", fontSize: "14px",}}>Trending</p>
      </div>
    );
  }
  if (type === "music") {
    return (
      <div className="flex flex-align">
        <Icon type="music" />
        <p style={{marginLeft: "15px", fontSize: "14px",}}>Music</p>
      </div>
    );
  }
  if (type === "gaming") {
    return (
      <div className="flex flex-align">
        <Icon type="gaming" />
        <p style={{marginLeft: "15px", fontSize: "14px",}}>Gaming</p>
      </div>
    );
  }
  if (type === "news") {
    return (
      <div className="flex flex-align">
        <Icon type="news" />
        <p style={{marginLeft: "15px", fontSize: "14px",}}>News</p>
      </div>
    );
  }
  if (type === "sports") {
    return (
      <div className="flex flex-align">
        <Icon type="sports" />
        <p style={{marginLeft: "15px", fontSize: "14px",}}>Sports</p>
      </div>
    );
  }
  
  
  if (type === "settings") {
    return (
      <div className="flex flex-align">
        <Icon type="settings" />
        <p style={{marginLeft: "15px", fontSize: "14px",}}>Settings</p>
      </div>
    );
  }
  
  if (type === "report") {
    return (
      <div className="flex flex-align">
        <Icon type="report" />
        <p style={{marginLeft: "15px", fontSize: "14px",}}>Report History</p>
      </div>
    );
  }
  if (type === "help") {
    return (
      <div className="flex flex-align">
        <Icon type="help" />
        <p style={{marginLeft: "15px", fontSize: "14px",}}>Help</p>
      </div>
    );
  }
  if (type === "feedback") {
    return (
      <div className="flex flex-align">
        <Icon type="feedback" />
        <p style={{marginLeft: "15px", fontSize: "14px",}}>Send feedback</p>
      </div>
    );
  }
  
  

  
  return null;
};
