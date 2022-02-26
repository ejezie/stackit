import React, { Component } from 'react'
import styled from "styled-components"
import {Oval} from "react-loader-spinner"
import Card from '../components/Card';

const FeedWrap = styled.div`
display: flex;
align-items; center;
justify-content: center;
padding: 5px;`;

const Alert = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-item: center;
  justify-center: center;
`;

const ROOT_API = 'https://api.stackexchange.com/2.2/';

export class Feed extends Component {
  constructor(){
    super(); 
    this.state = {
      data : [],
      loading: true,
      error: '',
    }
  }

  async componentDidMount(){
    try{
      const data = await fetch(`${ROOT_API}questions?order=desc&sort=activity&tagged=reactjs&site=stackoverflow`,)
      const dataJson = await data.json();
      console.log(data);

      if(dataJson){
        this.setState({
          data: dataJson,
          loading: false,
        });
      }
    }catch(error){
      this.setState({
        // error: error.message,
        error: "error",
        loading: false,
      })
    }
  }

  render() {

    const {data, loading, error} = this.state;

    if (loading || error){
      <Alert>{loading ? <Oval color="#00BFFF" height={80} width={80} /> : error}</Alert>
    }

    return (
      <FeedWrap>{
        data.items.map((item) => {
          <Card key={item.question_id} item = {item}></Card>
        })}</FeedWrap>
    )
  }
}

export default Feed