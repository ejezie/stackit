import React from 'react'
import logo from '../assets/coding.png'
import styled from 'styled-components'

const HeaderWrap = styled.div`
display : flex;
align-items: center;
justify-content: flex-start;
padding: 1rem 3rem;
.header{
  font-size: 1.7rem;
  font-family: 'Shizuru', cursive;
}
.header-image{
  width: 3rem;
}`;


function Header() {
  return (
    <HeaderWrap>
      <h1 className='header'>Stack-iT</h1>
      <img className='header-image' src={logo} alt="logo" />
      {/* <h1 className='header'>Over</h1> */}
    </HeaderWrap>
  )
}

export default Header
