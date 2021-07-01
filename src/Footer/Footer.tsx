import React from "react";
import "./style/Footer.css";

export default class Footer extends React.Component<any, any> {
  // 여기서 갖는 관심사는 '링크' + '정책'
  // 이용 약관 + 개인 정보 취급방침 및 쿠키 정책 + 쿠키 동의 + 사이트 맵 + 사이트 운영 방식
  // 조금 더 공부
  render() {
    return (
      <>
        <footer className="footer-wrapper">
          <p>Copyright ©Jeffrey all rights reserved.</p>
        </footer>
      </>
    )
  }
}