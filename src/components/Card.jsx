import React from 'react'
import styled from 'styled-components'
import userImage from '../assets/user.png'
import { Link } from 'react-router-dom';

const CardWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 27%;
  height: 12rem;
  border-radius: 35px;
  box-shadow: 
    inset 1px 1px 5px 0 rgba(0, 0, 0, 0.25),
    inset -1px -1px 5px 0 rgba(255, 255, 255, 0.6);
  margin: 0 0.9rem 2rem 0;
  transition: all 0.3s;
  padding: 1.3rem 1rem;
  cursor: pointer;
  // background: white;
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
  .cover{
    box-shadow: 
     1px 1px 5px 0 rgba(0, 0, 0, 0.25),
     -1px -1px 5px 0 rgba(255, 255, 255, 0.6);
    height: 15rem;
    width: 21rem;
    padding: 0.7rem 0.3rem;
    border-radius: 25px;
     
  }
  .wrap{
    width: 100%;
    .top{
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 3rem;
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
        font-size: 0.9rem;
        margin-bottom: 0.5rem;
        font-weight: 600;
        text-align: center;
        max-width: 1000px;
        padding-bottom: 1rem;
        border-radius: 5px;
        // border-bottom: 1px black solid;
      }
      .link{
        font-size: 0.9rem;
      }
    }
    .bottom{
      font-size: 0.7rem;
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
          <div className="tags">{`#${data.tags}`}</div>
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