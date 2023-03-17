import React, { useState } from "react";
import download from "../../../assets/download.jpg";
import "../Card/Card.css"
import { Icon } from "../../atoms/Icon";

const ReelsTemplate = () => {
  const [card, setCard] = useState([
    {
      id: "1",
      heading: "Introduction to Git and Github",
      author: "Technical Writing",
      views: "7 views",
      duration: "3 hours ago",
      src: "https://www.youtube.com/embed/wN6UHSXaIGw",
      time: "2:40",
    },

    {
      id: "2",
      heading: "Circle of Life By Ndlovu Youth Choir",
      author: "Ndlovu Youth Choir",
      views: "234k views",
      duration: "2 years ago",
      src: "https://www.youtube.com/embed/0AGtd2-jv0U",
      time: "1:30",
    },

    {
      id: "3",
      heading:
        "Maverick City Music - Fear Is Not My Future (MultiTracks Session)",
      author: "The Net Ninja",
      views: "234k views",
      duration: "2 years ago",
      src: "https://www.youtube.com/embed/treExOZXO4w",
      time: "2:40",
    },

    {
      id: "4",
      heading: "Learn React in 30 Minutes",
      author: "Web dev Simplified",
      views: "234k views",
      duration: "2 years ago",
      src: "https://www.youtube.com/embed/hQAHSlTtcmY",
      time: "1:29",
    },

    {
      id: "5",
      heading: "Introduction to Git and Github",
      author: "Technical Writing",
      views: "7 views",
      duration: "3 hours ago",
      src: "https://www.youtube.com/embed/wN6UHSXaIGw",
      time: "5:10",
    },

    // {
    //   id: "6",
    //   heading: "Circle of Life By Ndlovu Youth Choir",
    //   author: "Ndlovu Youth Choir",
    //   views: "234k views",
    //   duration: "2 years ago",
    //   src: "https://www.youtube.com/embed/0AGtd2-jv0U",
    //   time:"30:45",
    // },

    // {
    //   id: "7",
    //   heading: "Maverick City Music - Fear Is Not My Future (MultiTracks Session)",
    //   author: "The Net Ninja",
    //   views: "234k views",
    //   duration: "2 years ago",
    //   src: "https://www.youtube.com/embed/treExOZXO4w",
    //   time: "4:34",
    // },

    // {
    //   id: "8",
    //   heading: "Learn React in 30 Minutes",
    //   author: "Web dev Simplified",
    //   views: "234k views",
    //   duration: "2 years ago",
    //   src: "https://www.youtube.com/embed/hQAHSlTtcmY",
    //   time: "2:00:50",
    // }
  ]);
  return (
    <div className="reels-con">
      {card.map((card) => (
        <div className="video-content" key={card.id}>
          <div className="video">
            <a href="#" className="reel-box">
              {/* <img src={card.image} width="250px" /> */}
              <iframe
                className="vid-frame"
                width="260"
                height="180"
                // src="https://www.youtube.com/embed/hQAHSlTtcmY"
                src={card.src}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </a>
            <p className="time">{card.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReelsTemplate;
