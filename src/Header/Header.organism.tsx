import React from "react";
import Logo from "./component/Logo";
import SearchBox from "./component/SearchBox";
import Login from "./component/Login";
import "./Header.organism.css";
import "./style/Route.css";
import Router from "./component/Router";

export default class HeaderOrganism extends React.Component<any, any> {

  render() {
    return (
      <>
        <div className="header-wrapper">
          <div className="header-left">
            <Logo />
          </div>
          <div className="header-right">
            <SearchBox />
            <Login />
            <Router />
          </div>
        </div>
      </>
    )
  }
}