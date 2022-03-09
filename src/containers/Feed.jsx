import React, { Component } from 'react'
import styled from "styled-components"
import {Oval} from "react-loader-spinner"
import Card from '../components/Card';
import withRouter from '../withRouter';
import { Link } from 'react-router-dom';

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
`;

const Btn = styled(Link)`
 text-decoration: none;
 color: white;
 &:hover{
  color: rgba(255,255,255,0.5)
  } 
  cursor: pointer;
  width: 5rem;
  transition: all 0.4s;
  box-shadow: 
     2px 2px 6px 0 rgba(0, 0, 0, 0.25),
     -2px -2px 6px 0 rgba(255, 255, 255, 0.1);
      border-radius: 50px;
`;

const ROOT_API = 'https://api.stackexchange.com/2.2/';

class Feed extends Component {
  constructor({page, location}) {
    super();
    const page_value = page.get("page")
    const path_value = location.pathname;
    // console.log(location.pathname)

    this.state = {
      data: [],
      loading: true,
      error: '',
      page_num: page_value ? parseInt(page_value) : 1,
      path: path_value,
    };
  }

  async fecthApi(page) {
    try {
      const data = await fetch(
        `${ROOT_API}questions?order=desc&sort=activity&tagged=reactjs&site=stackoverflow&page=${page}`,
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

  // handleBtnPrev(){
  //   const {page_num} = this.state
  //   this.setState({
  //     // page_num: page_num - 1,
  //     page_num: page_num-1,
  //   })
  // }

  componentDidMount() {
    this.fecthApi(this.state.page_num);
  }

  componentDidUpdate(prevProps){
    const {page} = this.props;
    console.log("search-", this.props.location.search);
    console.log("prev-search-", prevProps.location.search);
    if(prevProps.location.search !== this.props.location.search){
      this.setState({
        page_num: parseInt(page.get("page")),
        loading: true,
      })
      this.fecthApi(this.state.page_num);
      console.log("page-", this.state.page_num);
    }
  };

  render() {
    const { data, loading, error, page_num, path } = this.state;
    console.log(path);
    console.log(page_num);
    console.log(data);

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
            {page_num > 1 && <Btn to={`${path}?page=${page_num-1}`} className="prev">{"<"}</Btn>}
            {data.has_more && <Btn to={`${path}?page=${page_num+1}`} className="next">{">"}</Btn>}
        </BtnWrap>
      </Wrap>
    );
  }
}

export default withRouter(Feed);