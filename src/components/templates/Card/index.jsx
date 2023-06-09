import React, { useState } from "react";
import download from "../../../assets/download.jpg";
import "./Card.css";
import { Button } from "../../atoms/Button";
import { Icon } from "../../atoms/Icon";

const CardTemplate = () => {
  const [card, setCard] = useState([
    {
      id: "1",
      heading: "Learn React in 30 Minutes",
      author: "Web dev Simplified",
      views: "234k views",
      duration: "2 years ago",
      src: "https://www.youtube.com/embed/hQAHSlTtcmY",
      time: "3:00:00",
    },
    {
      id: "2",
      heading:
        "Maverick City Music - Fear Is Not My Future (MultiTracks Session)",
      author: "The Net Ninja",
      views: "234k views",
      duration: "2 years ago",
      src: "https://www.youtube.com/embed/treExOZXO4w",
      time: "2:31"
    },
    {
      id: "3",
      heading: "Circle of Life By Ndlovu Youth Choir",
      author: "Ndlovu Youth Choir",
      views: "234k views",
      duration: "2 years ago",
      src: "https://www.youtube.com/embed/0AGtd2-jv0U",
      time: "6:23",
    },
    // {
    //   id: "4",
    //   heading: "COVENANT HOUR OF PRAYER |9, MARCH 2023 | FAITH TABERNACLE OTA",
    //   author: "Living Faith Church Worldwide",
    //   views: "24k views",
    //   duration: "14 hours ago",
    //   src: "https://www.youtube.com/embed/6xX3ha5QXJ8",
    //   time: "5:20",
    // },
    // {
    //   id: "5",
    //   heading: "Introduction to Git and Github",
    //   author: "Technical Writing",
    //   views: "7 views",
    //   duration: "3 hours ago",
    //   src: "https://www.youtube.com/embed/wN6UHSXaIGw",
    //   time: "2:40",
    // },

    // {
    //   id: "6",
    //   heading: "Circle of Life By Ndlovu Youth Choir",
    //   author: "Ndlovu Youth Choir",
    //   views: "234k views",
    //   duration: "2 years ago",
    //   src: "https://www.youtube.com/embed/0AGtd2-jv0U",
    //   time: "1:30",
    // },

    // {
    //   id: "7",
    //   heading: "Maverick City Music - Fear Is Not My Future (MultiTracks Session)",
    //   author: "The Net Ninja",
    //   views: "234k views",
    //   duration: "2 years ago",
    //   src: "https://www.youtube.com/embed/treExOZXO4w",
    //   time: "2:40",
    // },

    // {
    //   id: "8",
    //   heading: "Learn React in 30 Minutes",
    //   author: "Web dev Simplified",
    //   views: "234k views",
    //   duration: "2 years ago",
    //   src: "https://www.youtube.com/embed/hQAHSlTtcmY",
    //   time: "1:29",
    // }, 

    // {
    //   id: "9",
    //   heading: "Introduction to Git and Github",
    //   author: "Technical Writing",
    //   views: "7 views",
    //   duration: "3 hours ago",
    //   src: "https://www.youtube.com/embed/wN6UHSXaIGw",
    //   time: "5:10",
    // },

    // {
    //   id: "10",
    //   heading: "Circle of Life By Ndlovu Youth Choir",
    //   author: "Ndlovu Youth Choir",
    //   views: "234k views",
    //   duration: "2 years ago",
    //   src: "https://www.youtube.com/embed/0AGtd2-jv0U",
    //   time:"30:45",
    // },

    // {
    //   id: "11",
    //   heading: "Maverick City Music - Fear Is Not My Future (MultiTracks Session)",
    //   author: "The Net Ninja",
    //   views: "234k views",
    //   duration: "2 years ago",
    //   src: "https://www.youtube.com/embed/treExOZXO4w",
    //   time: "4:34",
    // },

    // {
    //   id: "12",
    //   heading: "Learn React in 30 Minutes",
    //   author: "Web dev Simplified",
    //   views: "234k views",
    //   duration: "2 years ago",
    //   src: "https://www.youtube.com/embed/hQAHSlTtcmY",
    //   time: "2:00:50",
    // }
  ]);
  return (
    <div className="video-container">
      {card.map((card) => (
        <div className="video-content" key={card.id}>
          <div className="video">
            <a href="#" className="video-box">
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
          <div className="video-details flex">
            <div className="author-logo">
              <img src={download}></img>
            </div>
            <div className="content-details">
              <h3>{card.heading}</h3>
              <div className="author-views">
                <p>{card.author}</p>
                <p>
                  {card.views}
                  <span>.</span>
                  <span>{card.duration}</span>
                </p>
              </div>
              <div className="hidden">
                <Button>
                  <Icon type="watchlater" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardTemplate;
