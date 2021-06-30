import { Component } from "react";
import { LoginState } from "./Login";
import { LoginProps } from "./Login";
import "../style/LoginModal.css";

export default class LoginModal extends Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props);
  }

  render() {
    return (
      <>
        {this.props.open
          ? <div className="login-modal-wrapper">
              <div className="login-modal-login-form">
                <label htmlFor="username">Username</label>
                <input className="login-username-input" type="text" name="username"  placeholder="Input your email account.." alt="account"/>
                <label htmlFor="password">Password</label>
                <input className="login-password-input" src="image" type="password" name="password" placeholder="Input your password account.." alt="password" />
                <button className="login-modal-login-button" type="submit">Sign in</button>
              </div>
              <div className="login-modal-user-account-forgot-wrapper">
                <div className="login-modal-user-account-forgot-account">Forgot your account?</div>
                {/* 또 다른 모달창? 아니면 Nested Modal? */}
                <div className="login-modal-user-account-forgot-password">Forgot your password?</div>
                {/* 또 다른 모달창? 아니면 Nested Modal? */}
              </div>
              <div className="login-modal-social-login">
                <div className="login-modal-social-login-google">Continue with Google</div>
                {/* 클릭 시 Google 창으로 연동 */}
                <div className="login-modal-social-login-facebook">Continue with Facebook</div>
                {/* 클릭 시 Facebook 창으로 연동 */}
                <div className="login-modal-social-login-kakao">Continue with KaKao</div>
                {/* 클릭 시 KaKao 창으로 연동 */}
              </div>
            </div>
          : null
        }
      </>
    )
  }
}