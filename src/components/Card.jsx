import React from 'react'
import styled from 'styled-components'

const CardWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 15rem;
  border-radius: 10px;
  box-shadow:  2px 2px 10px #c5c5c5, -2px -2px 10px #fbfbfb;
  margin: 0 0 2rem 0;
  cursor: pointer;
  transition: all 0.3s;
  &:hover{
    background: #f0f0f0; 
  }
  .center{
 
  }
`;

function Card({data}) {
  return (
    <CardWrap>
      <div className="top">
          <img src={data.owner.profile_image} alt="profile" />
          <div className="bar">
            <div className="bar-one"></div>
            <div className="bar-two"></div>
          </div>
      </div>
      <div className="center">
        <div className="tittle">{data.title}</div>
        <div className="tags">{`${data.tags} `}</div>
        <div className="link">{data.link}</div>
      </div>
      <div className="bottom">

      </div>
    </CardWrap>
  )
}

export default Card