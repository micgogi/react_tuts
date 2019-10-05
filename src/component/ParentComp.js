import React, { Component } from 'react'
import RegComp from './RegComp';
import PureComp from './PureComp';
import MemoComp from './MemoComp';

 class ParentComp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name:'Rahul Gogyani'
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'Rahul Gogyani'
            })
        },2000)
    }
    
    render() {
        console.log('Parent comp render')
        return (
            <div>
                <MemoComp name = {this.state.name}/>
                 {/* <RegComp name = {this.state.name}></RegComp>
                <PureComp name = {this.state.name}></PureComp>   */}
                hiiiiiiiiiiiii
            </div>
        )
    }
}

export default ParentComp
