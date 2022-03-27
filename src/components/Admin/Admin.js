import React from "react";
import TopBar from "../Admin/Topbar/TopBar";
import SideMenu from "../Admin/SideMenu/SideMenu";
import ContentPage from "../Admin/ContentPage/ContentPage";

function Admin(props) {
  return (
    <div>
      <TopBar></TopBar>
      <SideMenu></SideMenu>
      <ContentPage></ContentPage>
    </div>
  );
}

export default Admin;
