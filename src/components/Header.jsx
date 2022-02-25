import React from 'react'
import logo from '../assets/coding.png'
import styled from 'styled-components'

const HeaderWrap = styled.div`
display : flex;
align-items: center;
justify-content: flex-start;
padding: 1rem 3rem;
cursor: pointer;
box-shadow: 0.1px 0.1px 2px black;
.header{
  font-size: 1.5rem;
  font-family: 'Shizuru', cursive;
  letter-spacing: 2px;
  font-weight: 700;
}
.header-image{
  width: 2.6rem;
  object-fit: contain;
}`;


function Header() {
  return (
    <HeaderWrap>
      <h1 className='header'>StackiT</h1>
      <img className='header-image' src={logo} alt="logo" />
      {/* <h1 className='header'>Over</h1> */}
    </HeaderWrap>
  )
}

export default Header
