import React from "react";
import "./MainContainer.css";
import VideoCard from "./VideoCard";

function MainContainer() {
  return (
    <div className="mainContainer">
      <h2>Recommended</h2>
      <div className="mainContainer__videos">
        <VideoCard
          channelImage="https://pickaface.net/gallery/avatar/unr_logoyoutube_170130_0203_9qavbx.png"
          timestamp="2 days ago"
          views="10M views"
          channel="dummy"
          title="Hey YouTube"
          image="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/136060429/original/ca66a29470ee4382592366b7d9fece7160710f9d/design-3-eye-catching-youtube-thumbnail.jpg"
        />
        <VideoCard
          channelImage="https://image.cnbcfm.com/api/v1/image/105992231-1561667465295gettyimages-521697453.jpeg?v=1561667497&w=900&h=506"
          timestamp="5 days ago"
          views="5M views"
          channel="funny dogs"
          title="Dog barks xd"
          image="https://image.cnbcfm.com/api/v1/image/105992231-1561667465295gettyimages-521697453.jpeg?v=1561667497&w=900&h=506"
        />
        <VideoCard
          channelImage="https://pickaface.net/gallery/avatar/unr_logoyoutube_170130_0203_9qavbx.png"
          timestamp="3 weeks ago"
          views="10k views"
          channel="sneakers"
          title="Top 10 jordans"
          image="https://cdn.shopify.com/s/files/1/0078/2472/products/JORDAN_sneaker_history_11x17_efc76edf-b705-4339-8b44-c7f9701480f3_360x.png?v=1527875675"
        />
        <VideoCard
          channelImage="https://pickaface.net/gallery/avatar/unr_logoyoutube_170130_0203_9qavbx.png"
          timestamp="2 days ago"
          views="10M views"
          channel="dummy"
          title="Hey YouTube"
          image="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/136060429/original/ca66a29470ee4382592366b7d9fece7160710f9d/design-3-eye-catching-youtube-thumbnail.jpg"
        />
        <VideoCard
          channelImage="https://image.cnbcfm.com/api/v1/image/105992231-1561667465295gettyimages-521697453.jpeg?v=1561667497&w=900&h=506"
          timestamp="5 days ago"
          views="5M views"
          channel="funny dogs"
          title="Dog barks xd"
          image="https://image.cnbcfm.com/api/v1/image/105992231-1561667465295gettyimages-521697453.jpeg?v=1561667497&w=900&h=506"
        />
        <VideoCard
          channelImage="https://pickaface.net/gallery/avatar/unr_logoyoutube_170130_0203_9qavbx.png"
          timestamp="3 weeks ago"
          views="10k views"
          channel="sneakers"
          title="Top 10 jordans"
          image="https://cdn.shopify.com/s/files/1/0078/2472/products/JORDAN_sneaker_history_11x17_efc76edf-b705-4339-8b44-c7f9701480f3_360x.png?v=1527875675"
        />
        <VideoCard
          channelImage="https://pickaface.net/gallery/avatar/unr_logoyoutube_170130_0203_9qavbx.png"
          timestamp="2 days ago"
          views="10M views"
          channel="dummy"
          title="Hey YouTube"
          image="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/136060429/original/ca66a29470ee4382592366b7d9fece7160710f9d/design-3-eye-catching-youtube-thumbnail.jpg"
        />
        <VideoCard
          channelImage="https://image.cnbcfm.com/api/v1/image/105992231-1561667465295gettyimages-521697453.jpeg?v=1561667497&w=900&h=506"
          timestamp="5 days ago"
          views="5M views"
          channel="funny dogs"
          title="Dog barks xd"
          image="https://image.cnbcfm.com/api/v1/image/105992231-1561667465295gettyimages-521697453.jpeg?v=1561667497&w=900&h=506"
        />
        <VideoCard
          channelImage="https://pickaface.net/gallery/avatar/unr_logoyoutube_170130_0203_9qavbx.png"
          timestamp="3 weeks ago"
          views="10k views"
          channel="sneakers"
          title="Top 10 jordans"
          image="https://cdn.shopify.com/s/files/1/0078/2472/products/JORDAN_sneaker_history_11x17_efc76edf-b705-4339-8b44-c7f9701480f3_360x.png?v=1527875675"
        />
      </div>
    </div>
  );
}

export default MainContainer;
