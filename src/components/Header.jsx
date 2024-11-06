import styled from "styled-components"
import logo from "../assets/logo.png"

export default function Header() {
  return (
    <HeaderLogo>
      <img src={logo} alt="logo" />
      <span>ZapRecall</span>
    </HeaderLogo>
  )
}

const HeaderLogo = styled.div`
  font-family: "Righteous", sans-serif;
  font-weight: 400;
  font-size: 36px;
  line-height: 44.7px;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  margin-top: 42px;
  margin-bottom: 51px;
  img {
    width: 52px;
    margin-right: 20px;
  }
`