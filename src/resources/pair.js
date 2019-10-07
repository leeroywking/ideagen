import React from 'react'

class ReturnRandPair extends React.Component {
    constructor(props) {
        super(props)
    };
render(){
    return (
        <div>
            <h1>{this.props.pair[0]}</h1>
            <br /> and
        <h1>{this.props.pair[1]} </h1>
        </div>
    )
}
}


export default ReturnRandPair;