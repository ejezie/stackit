import React from 'react'
import logo from '../assets/coding.png'
import styled from 'styled-components'
import Helmet from "react-helmet"

const HeaderWrap = styled.div`
display : flex;
align-items: center;
justify-content: flex-start;
padding: 1.5rem 3.3rem;
cursor: pointer;
// box-shadow: 0.1px 0.1px 2px black;
.header{
  font-size: 1.2rem;
  letter-spacing: 2px;
  font-weight: 700;
}
.header-image{
  width: 2rem;
  object-fit: contain;
  margin-left: 0.3rem;
}`;


function Header() {
  return (
    <>
      <Helmet>
        <title>`Q and A Feed`</title>
        <meta name='description' content='This is a Community Feed project build with React' />
      </Helmet>
      <HeaderWrap>
        <h1 className='header'>stackit</h1>
        <img className='header-image' src={logo} alt="logo" />
      </HeaderWrap>
    </>
  )
}

export default Header
