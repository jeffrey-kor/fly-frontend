import React from "react";
import HeaderOrganism from "./Header/Header.organism";
import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header/Header.organism";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Payment from "./Pages/Payment";
import Review from "./Review/Review";
import Post from "./Post/Review";

export default class App extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <HeaderOrganism />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/users" component={Payment}/>
          <Route path="/review" component={Review}/>
          <Route path="/post" component={Post}/>
        </Switch>
      </BrowserRouter>
    )
  }
}