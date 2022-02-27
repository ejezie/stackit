import React from 'react'
import styled from 'styled-components'

const CardWrap = styled.div`
  width: 80%
  // height: 50rem;
  border-radius: 50px;
  background: #e0e0e0;
  box-shadow:  20px 20px 60px #c5c5c5, -20px -20px 60px #fbfbfb;
  margin: 0 0 2rem 0;
`;

function Card({data}) {
  return (
    <CardWrap>
      <div className="top">
        <div className="tittle">{data.title}</div>
        <div className="tags">{data.tags.forEach(tag => {
          <div className="tag">{tag}</div>
        })}</div>
      </div>
    </CardWrap>
  )
}

export default Card