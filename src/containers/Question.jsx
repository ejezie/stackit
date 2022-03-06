import React, { Component } from 'react'
import styled from 'styled-components'
import {Oval} from "react-loader-spinner"
import withRouter from '../withRouter';

const QuestionWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
`;

const Alert = styled.div`
    width: 100vw;
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ROOT_API = 'https://api.stackexchange.com/2.2/';

export class Question extends Component {
    constructor(){
        super();

        this.state = {
            data: [],
            loading: true,
            error: '',
        }
    }

    async componentDidMount(){

         const { params } = this.props;
         const { page } = this.props;
         let page_query = page.get("page");
        console.log(page_query);
        try{
            const data = await fetch(`${ROOT_API}questions/${params.id}?site=stackoverflow`,)
            const dataJson = await data.json();

            if(dataJson){
                this.setState({
                    data: dataJson,
                    loading: false,
                })
            }
        }catch(error){
            this.setState({
                loading: true,
                error: error.message,
            })
        }
    }

    render() {
        const {data, loading, error} = this.state;
        // console.log(data.items)
        if(loading || error){
            return <Alert>{loading ? <Oval color="green" height={50} width={50} /> : error}</Alert>;
        }
        return (
        <QuestionWrap>
            <div className="wrap">
                {data.items[0].title}
                {data.items[0].link}
                <img src={data.items[0].owner.profile_image} alt="" /> 
            </div>
        </QuestionWrap>
        )
    }
}

export default withRouter(Question)