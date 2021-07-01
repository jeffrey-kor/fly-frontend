import { Component } from "react";
import { LoginState } from "./Login";
import { LoginProps } from "./Login";
import { AiOutlineGoogle } from 'react-icons/ai';
import { FaFacebookSquare } from 'react-icons/fa';
import { RiKakaoTalkFill } from 'react-icons/ri';
import "../style/LoginModal.css";

export default class LoginModal extends Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props);
  }

  render() {
    return (
      <>
        {this.props.open
          ? <div className="modal-wrapper">
              <div className="login-modal-wrapper">
                <button className="cancel-button" onClick={this.props.close}>취소 버튼</button>

                <div className="input-box">
                  <input className="login-username-input" type="text" name="username" placeholder="User account email.." alt="account"/>
                  <label htmlFor="username">Enter your account email</label>
                </div>

                <div className="input-box">
                  <input className="login-password-input" src="image" type="password" name="password" placeholder="Input your password account.." alt="password" />
                  <label htmlFor="password">Enter your password</label>
                </div>

                <button className="login-modal-login-button" type="submit">Sign in</button>

                <div className="login-modal-user-account-forgot-wrapper">
                  <div className="login-modal-user-account-forgot-account">You are not a member?</div>
                  <div className="login-modal-user-account-forgot-password">Forgot your password?</div>
                </div>
                <div className="login-modal-social-login">

                  <div className="login-modal-social-login-google-wrapper">
                    <div className="google-logo"><AiOutlineGoogle /></div>
                    <div className="login-modal-social-login-google">Continue with Google</div>
                  </div>

                  <div className="login-modal-social-login-facebook-wrapper">
                    <div className="facebook-logo"><FaFacebookSquare /></div>
                    <div className="login-modal-social-login-facebook">Continue with Facebook</div>
                  </div>

                  <div className="login-modal-social-login-kakao-wrapper">
                    <div className="kakao-logo"><RiKakaoTalkFill /></div>
                    <div className="login-modal-social-login-kakao">Continue with KaKao</div>
                  </div>

                </div>
              </div>
            </div>
          : null
        }
      </>
    )
  }
}
