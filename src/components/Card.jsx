import React from 'react'
import styled from 'styled-components'

const CardWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10rem
  height: 50rem;
  border-radius: 50px;
  padding: 19rem 0;
  // background: #e0e0e0;
  box-shadow:  10px 10px 30px #c5c5c5, -10px -10px 30px #fbfbfb;
  margin: 0 0 2rem 0;
  cursor: pointer;
  transition: all 0.3s;
  &:hover{
    background: #e0e0e0;
  }
  .top{
    // width: 5rem;
    // height: 20rem
  }
`;

function Card({data}) {
  return (
    <CardWrap>
      
      <div className="top">
        <div className="tittle">{data.title}</div>
        <div className="tags">{`${data.tags} `}</div>
      </div>
    </CardWrap>
  )
}

export default Card