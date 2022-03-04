import React from 'react'
import styled from 'styled-components'
import userImage from '../assets/user.png'
import { Link } from 'react-router-dom';

const CardWrap = styled.div`
  position: relative;
  width: 20%;
  height: 20rem;
  box-shadow: inset 2px 2px 15px rgba(0,0,0,0.5),
              inset -2px -2px 5px rgba(255,255,255,0.1),
              2px 2px 3px rgba(0,0,0,0.5),
              -2px -2px 3px rgba(255,255,255,0.1);
  border-radius: 15px;
  margin: 0 0.9rem 2rem 0;
  transition: all 0.3s;
  padding: 1.3rem 1rem;
  cursor: pointer;
  &:hover{
    // background: #f0f0f0; 
  }
  @media (max-width: 722px) {
    width: 40%;
  }
  @media (max-width: 560px) {
    width: 80%;
    margin: 0 0rem 2rem 0;
  }
 
  .wrap{
    position: absolute;
    top: 20px;
    bottom: 20px;
    right: 20px;
    left: 20px;
    background: #2a2b2f;
    border: 2px solid #1e1f23;
    border-radius: 15px;
    box-shadow: 0 20px 50px rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .top{
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1.6rem;
      .user{
        .image{
          border-radius: 50%;
          width: 3.5rem;
          height: 3.5rem;
          background: black;
          border: 2px solid rgba(244, 244, 244, 0.4);
        }
        .name{
          font-size: 0.6rem;
          font-weight: 700;
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
        font-size: 0.7rem;
        padding: 0 1rem;
        margin-bottom: 0.5rem;
        font-weight: 600;
        text-align: center;
        padding-bottom: 1rem;
        // white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .link{
        font-size: 0.9rem;
      }
    }
    .bottom{
      font-size: 0.7rem;
      padding: 1rem;
      transition: all 0.5s;
      box-shadow: 
       2px 2px 6px 0 rgba(0, 0, 0, 0.25),
       -2px -2px 6px 0 rgba(255, 255, 255, 0.1);
      border-radius: 50px;
    &:hover{
      box-shadow: 
      inset 2px 2px 6px 0 rgba(0, 0, 0, 0.25),
      inset -2px -2px 6px 0 rgba(255, 255, 255, 0.1);
    }
    }
  }
`;

function Card({data}) {
  return (
    <CardWrap>
      <div className="cover">
        <div className="wrap">
          <div className="top">
            <div className="user">
              <img className='image' src={data?.owner?.profile_image || userImage} alt="profile"/>
              <div className="name">
                {data.owner.display_name}
              </div>
            </div>
            {/* <div className="tags">{`#${data.tags}`}</div> */}
          </div>
          <div className="center">
            <div className="title">{data.title}</div>
            {/* <a className='link' href={data.link}>{data.link}</a> */}
          </div>
          <div className="bottom">
              {`views: ${data.view_count} || answers: ${data.answer_count}`}
          </div>
        </div>
      </div>
    </CardWrap>
  )
}

export default Card