import React, { Component } from 'react'
import styled from 'styled-components'
import {Oval} from "react-loader-spinner"

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

export class Question extends Component {
    constructor(){
        super();

        this.state = {
            data: [],
            loading: true,
            error: '',
        }
    }
    render() {
        const {data, loading, error} = this.state;
        if(loading || error){
            return <Alert>{loading ? <Oval color="green" height={50} width={50} /> : error}</Alert>;
        }
        return (
        <QuestionWrap>Question</QuestionWrap>
        )
    }
}

export default Question