import React, { Component } from 'react'
import styled from "styled-components"
import {Oval} from "react-loader-spinner"
import Card from '../components/Card';
import withRouter from '../withRouter';

const Wrap = styled.div`
  position: relative;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
;`;
const FeedWrap = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 5rem;
;`;

const Alert = styled.div`
width: 100vw;
height: 70vh;
display: flex;
align-items: center;
justify-content: center;
`;
const BtnWrap = styled.div`
  position: absolute;
  bottom: 0;
  right: 2rem;
  width: 15%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  .prev, .next{
    cursor: pointer;
    width: 5rem;
    transition: all 0.4s;
    box-shadow: 
       2px 2px 6px 0 rgba(0, 0, 0, 0.25),
       -2px -2px 6px 0 rgba(255, 255, 255, 0.1);
        border-radius: 50px;
    &:hover{
      color: rgba(255,255,255,0.5)
    }
  }
`;

const ROOT_API = 'https://api.stackexchange.com/2.2/';

class Feed extends Component {
  constructor({page}) {
    super();
    let page_value = page.get("page")
    console.log(page_value)

    this.state = {
      data: [],
      loading: true,
      error: '',
      page_num: page_value ? parseInt(page_value) : 1,
    };
  }

  async componentDidMount() {
    try {
      const data = await fetch(
        `${ROOT_API}questions?order=desc&sort=activity&tagged=reactjs&site=stackoverflow`,
      );
      const dataJSON = await data.json();

      if (dataJSON) {
        this.setState({
          data: dataJSON,
          loading: false,
        });
      }
    } catch (error) {
      this.setState({
        loading: false,
        error: error.message,
      });
    }
  }

  render() {
    const { data, loading, error } = this.state;

    if (loading || error) {
      return <Alert>{loading ? <Oval color="green" height={50} width={50} /> : error}</Alert>;
    }

    return (
      <Wrap>
        <FeedWrap>
          {data.items.map(item => (
            <Card key={item.question_id} data={item} />
          ))}
        </FeedWrap>
        <BtnWrap className="btn-wrap">
            <div className="prev">{"<"}</div>
            <div className="next">{">"}</div>
        </BtnWrap>
      </Wrap>
    );
  }
}

export default withRouter(Feed);