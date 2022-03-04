import React from 'react'
import styled from 'styled-components'
import userImage from '../assets/user.png'
import { Link } from 'react-router-dom';

const CardWrap = styled.div`
  position: relative;
  display: flex;
  align-item: center;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 19%;
  height: 20rem;
  margin: 0 0.9rem 2rem 0;
  transition: all 0.3s;
  padding: 1.3rem 1rem;
  box-shadow: inset 5px 5px 15px rgba(0,0,0,0.5),
              inset 1px -5px 10px rgba(255,255,255,0.1),
              5px 5px 3px rgba(0,0,0,0.5),
              -2px -2px 3px rgba(255,255,255,0.1);
  border-radius: 15px;
  &:hover{
    // background: #f0f0f0; 
  }
  @media (max-width: 722px) {
    width: 40%;
  }
  @media (max-width: 560px) {
    width: 70%;
    margin: 0 0rem 2rem 0;
  }
 
  .wrap{
    position: absolute;
    top: 12px;
    bottom: 12px;
    right: 12px;
    left: 12px;
    background: #1e1f23;
    border: 2px solid #1e1f23;
    border-radius: 15px;
    box-shadow: 0 20px 50px rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: all 0.5s;
    overflow: hidden;
    &:hover{
      top: 5px;
    bottom: 5px;
    right: 5px;
    left: 5px;
    }
    &:hover .hoverbg{
      transform: translateY(158px);
    }
    &:hover .hoverbg{
      transform: translateY(158px);
    }
    .hoverbg{
      position: absolute;
      height: 19rem;
      width: 100%;
      background: rgba(126, 51, 51, 0.2);
      // border-radius: 15px 15px 5px 5px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
      transition: all 0.5s;
      transform: translateY(350px);
    }
    .top{
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1rem;
      .user{
        .image{
          border-radius: 50%;
          width: 3.5rem;
          height: 3.5rem;
          background: black;
          border: 15px solid rgb(49, 38, 38);
          margin-bottom: 0.3rem;
        }
        .name{
          font-size: 0.6rem;
          font-weight: 700;
        }
      }
    }
    .center{
      // border: 2px solid #312626;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1rem;
      padding: 0.5rem;
      border-radius: 50px;
      .title{
        width: 12rem;
        font-size: 0.65rem;
        font-weight: 600;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .link{
        font-size: 0.9rem;
      }
    }
    .bottom{
      cursor: pointer;
      font-size: 0.7rem;
      padding: 1rem;
      transition: all 0.5s;
      z-index: 2;
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
    .views{
      opacity: 1;
      transition: all 0.5s;
      margin-top: 3rem;
      font-size: 0.65rem;
      border: 2px solid #312626;
      padding: 0.5rem;
      border-radius: 15px;
      z-index: 2;
    }
  }
`;

function Card({data}) {
  return (
    <CardWrap>
      <div className="cover">
        <div className="wrap">
          <div className="hoverbg"></div>
          <div className="top">
            <div className="user">
              <img className='image' src={data?.owner?.profile_image || userImage} alt="profile"/>
              <div className="name">
                {data.owner.display_name}
              </div>
            </div>
          </div>
          <div className="center">
            <div className="title">{data.title}</div>
            {/* <a className='link' href={data.link}>{data.link}</a> */}
          </div>
          <div className="bottom">
             View Question
          </div>
          <div className="views">
          <i class="fa-solid fa-eye"></i>
            {`views: ${data.view_count} || answers: ${data.answer_count} `}
          </div>
        </div>
      </div>
    </CardWrap>
  )
}

export default Card