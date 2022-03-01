import React from 'react'
import styled from 'styled-components'
import userImage from '../assets/user.png'
import { Link } from 'react-router-dom';

const CardWrap = styled.div`
  display: flex;
  align-items: center;
  // justify-content: center;
  flex-direction: column;
  width: 27%;
  height: 12rem;
  border-radius: 10px;
  box-shadow:  2px 2px 10px #c5c5c5, -2px -2px 10px #fbfbfb;
  margin: 0 0.9rem 2rem 0;
  transition: all 0.3s;
  padding: 1.3rem 1rem;
  &:hover{
    // background: #f0f0f0; 
  }
  .wrap{
    width: 100%;
    .top{
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 2rem;
      .user{
        // width: 4rem;
        .image{
          border-radius: 50%;
          width: 2.4rem;
        }
        .name{
          font-size: 0.6rem;
        }
      }
      .tags{
        font-size: 0.65rem;
        color: sky-blue;
        width: 7rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    .center{
      .title{
        height: 3rem;
        font-size: 0.8rem;
        margin-bottom: 0.5rem;
        font-weight: 700;
        text-align: left;
        max-width: 1000px;
        padding-bottom: 1rem;
        border-bottom: 1px black solid;
      }
      .link{
        font-size: 0.9rem;
      }
    }
  }
`;

function Card({data}) {
  return (
    <CardWrap>
      <div className="wrap">
        <div className="top">
          <div className="user">
            <img className='image' src={data?.owner?.profile_image || userImage} alt="profile"/>
            <div className="name">
              {data.owner.display_name}
            </div>
          </div>
          <div className="tags">{`#${data.tags}`}</div>
        </div>
        <div className="center">
          <div className="title">{data.title}</div>
          {/* <a className='link' href={data.link}>{data.link}</a> */}
        </div>
        <div className="bottom">

        </div>
      </div>
    </CardWrap>
  )
}

export default Card