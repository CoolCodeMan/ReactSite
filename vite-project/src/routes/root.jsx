import { Outlet } from "react-router-dom";

export default function Root() {
    return (
      <>

      <div id="sidebarStyle">
      <h1>MySite, welcome</h1>

      <a href="/infopage">Info</a><br/><br/>
      <a href="/newsupdates">News & Updates</a><br/><br/>


      </div>

      <div id="contentStyle">
        <Outlet />
      </div>

      </>

    );
  }