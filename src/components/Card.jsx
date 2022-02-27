import React from 'react'
import styled from 'styled-components'

const CardWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10rem
  height: 50rem;
  background-color: red;
  border-radius: 50px;
  // padding: 19rem 0;
  // background: #e0e0e0;
  box-shadow:  5px 5px 20px #c5c5c5, -5px -5px 20px #fbfbfb;
  margin: 0 0 2rem 0;
  cursor: pointer;
  transition: all 0.3s;
  &:hover{
    background: #e0e0e0;
  }
  .wrap{
    // width: 5rem;
    // height: 20rem
  }
`;

function Card({data}) {
  return (
    <CardWrap>
      <div className="wrap">
        <div className="tittle">{data.title}</div>
        <div className="tags">{`${data.tags} `}</div>
      </div>
    </CardWrap>
  )
}

export default Card