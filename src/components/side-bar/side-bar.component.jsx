import React from "react";

import SidebarItem from "../sidebar-item/sidebar-item.component";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import "./side-bar.styles.scss";

function SideBar() {
  return (
    <div className="side-bar-container">
      <SidebarItem Icon={HomeIcon} title="Home" route="/" />
      <SidebarItem Icon={HistoryIcon} title="History" route="/history" />
    </div>
  );
}

export default SideBar;
