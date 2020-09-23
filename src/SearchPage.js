import React from "react";
import "./SearchPage.css";
import TuneoutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneoutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://pickaface.net/gallery/avatar/CleanGamingMods5217c4a1ca73d.png"
        channel="Fun Videos"
        verified
        subs="1M"
        noOfVideos={679}
        description="Find latest funny videos"
      />
      <hr />
      <VideoRow
        views="3M"
        subs="478K"
        description="Let's see what's going on!"
        timestamp="2 days ago"
        channel="Fun Videos"
        title="Funny Cat's"
        image="https://images.pexels.com/photos/1183434/pexels-photo-1183434.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      />
    </div>
  );
}

export default SearchPage;
