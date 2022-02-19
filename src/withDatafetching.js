import React from "react";

export default function withDataFetching (wrappedComponent) {

    class withDataFetching extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                data : [],
                loading : props.loadingMessages,
            };
        }

        async componentDidMount(){
            try {
                const data = await fetch(this.props.dataSource);
                const dataJson = await data.json();

                if(dataJson){
                    this.setState({
                        data : dataJson,
                        loading: false,
                 })
                }
            }
            catch(error){
                this.setState({
                    loading: error.message,
                })
            }
        }

        render(){

            const {data, loading} = this.state;
            <wrappedComponent data={data} loading={loading}/>

        }
    }

    withDataFetching.displayName = `withDataFetching(${wrappedComponent.name})`;
    return withDataFetching;
}