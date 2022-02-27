import React from 'react'
import styled from 'styled-components'

const CardWrap = styled.div`
  width: 80%
  height: 50rem;
  border-radius: 50px;
  background: #e0e0e0;
  box-shadow:  20px 20px 60px #c5c5c5, -20px -20px 60px #fbfbfb;
`;

function Card() {
  return (
    <CardWrap>Card</CardWrap>
  )
}

export default Card