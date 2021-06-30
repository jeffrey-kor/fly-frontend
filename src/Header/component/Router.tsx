import React from "react";
import { Link } from "react-router-dom";
import FavoriteIcon from '@material-ui/icons/Favorite';
import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import "../style/Route.css";

export default class Router extends React.Component<any, any> {

  render() {
    return (
        <div className="route-wrapper">
          <nav><ul>
            <li><Link to="/">
              <button type="button"><VideoCallIcon /></button>
            </Link></li>
            <li><Link to="/post">
              <button type="button"><BorderColorOutlinedIcon/></button>
            </Link></li>
            <li><Link to="/users">
              <button type="button"><AirplanemodeActiveIcon /></button>
            </Link></li>
            <li><Link to="/cart">
              <button type="button"><FavoriteIcon /></button>
            </Link></li>

            <li><Link to="/review">
              <button type="button"><NotificationsNoneIcon /></button>
            </Link></li>
          </ul></nav>
        </div>
    )
  }
}