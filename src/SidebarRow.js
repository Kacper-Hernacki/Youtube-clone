import React from "react";
import "./SidebarRow.css";

function SidebarRow({ selected, Icon, title }) {
  return (
    <div className={`sidebarRow ${selected && "selected"}`}>
      <Icon className={`sidebarRow__icon ${selected && "selected"}`} />
      <h2 className={`sidebarRow__title ${selected && "selected"}`}>{title}</h2>
    </div>
  );
}

export default SidebarRow;
