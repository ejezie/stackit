import React from 'react'
import logo from '../assets/coding.png'
import styled from 'styled-components'

const HeaderWrap = styled.div`
display : flex;`

function Header() {
  return (
    <HeaderWrap>
      <h1>Stack</h1>
      <img src={logo} alt="logo" />
      <h1>Over</h1>
    </HeaderWrap>
  )
}

export default Header