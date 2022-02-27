import React, { Component } from 'react'
import styled from "styled-components"
import {Oval} from "react-loader-spinner"
import Card from '../components/Card';

const FeedWrap = styled.div`
display: flex;
align-items; center;
justify-content: center;
flex-direction: column;
width: 100vw;
padding: 5px;`;

const Alert = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-item: center;
  justify-center: center;
`;

const ROOT_API = 'https://api.stackexchange.com/2.2/';

class Feed extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: true,
      error: '',
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
    console.log(data);

    if (loading || error) {
      return <Alert>{loading ? <Oval color="green" height={80} width={80} /> : error}</Alert>;
    }

    return (
      <FeedWrap>
        {data.items.map(item => (
          <Card key={item.question_id} data={item} />
        ))}
      </FeedWrap>
    );
  }
}

export default Feed;