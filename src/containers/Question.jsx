import React, { Component } from 'react'
import styled from 'styled-components'
import {Oval} from "react-loader-spinner"
import withRouter from '../withRouter';
import userImage from '../assets/user.png'

const QuestionWrap = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
    .wrap{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 4rem 0;
        width: 90%;
        // border: 1px rgba(255, 255, 255, 0.1) solid;
         border-radius: 15px;
         .img{
             margin-bottom: 2rem;
             border-radius: 50%;
             border: 50px rgba(255, 255, 255, 0.1) solid;
             @media (max-width: 500px) {
                width: 40%;
                border: 40px rgba(255, 255, 255, 0.1) solid;
            }
         }
         .title{
             margin-bottom: 1rem;
             color: rgba(255, 255, 255, 0.3);
             @media (max-width: 500px) {
                font-size: 0.7rem;
                padding: 0rem .1rem;
            }
         }
         .link{
             color: rgba(255, 255, 255, 0.5);
             @media (max-width: 500px) {
                font-size: 0.7rem;
                padding: 0rem .1rem;
            }
         }
    }
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
    // Test Ammend
    // Test Amend two
    async componentDidMount(){

        const { params } = this.props;
        
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
                <img className='img' src={data.items[0].owner.profile_image || userImage} alt="" /> 
                <div className="title">{`Question : ${data.items[0].title}?`}</div>
                <a className='link' href={data.items[0].link}>{data.items[0].link}</a>  
            </div>
        </QuestionWrap>
        )
    }
}

export default withRouter(Question)