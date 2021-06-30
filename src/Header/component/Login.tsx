import { Component } from "react";
import LoginModal from "./LoginModal";
import "../style/Login.css";

export type LoginState = {
  isVisible: boolean;
  close: Function;
}

export interface LoginProps {
  open: boolean
  close: () => void;
}

export default class Login extends Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      isClick: false,
      isVisible: false
    }

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    // 로그인 상태가 아닌 경우 예외처리
    console.log("Clicked and Open Modal for login");
    this.setState((preState: { isVisible: boolean; }) => ({
      isVisible: !preState.isVisible
    }));
  }

  closeModal() {
    console.log("Clicked Exit button for exiting this modal");
    this.setState((preState: { isVisible: boolean; }) => ({
      isVisible: preState.isVisible
    }));
  }

  render() {

    return(
      <div className="login-button-wrapper">
        {!this.state.isVisible
          ? <button onClick={this.openModal} className="login-button" type="button">Sign in</button>
          : null
        }
        <LoginModal open={this.state.isVisible} close={this.closeModal} />
      </div>
    )
  }
}
