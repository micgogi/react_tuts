import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

export class LifecycleA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name:'Rahul'
        }
        console.log("LifecycleA Constructor")
    }

    static getDerivedStateFromProps(props,state){
        console.log("lifecycleA derived fromstateProp")
        return  null
    }
    componentDidMount(){
        console.log('LifecycleA Compone dimount')
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log("LifecycleA  getSnapshotBeforeUpdate")
        return null
    }
     shouldComponentUpdate(){
         console.log("Lifecyle A  ShouldComponentUpdata")
         return true
     }
     componentDidUpdate(){
         console.log('LifeCycleA ComponentDidUpdate')
     }
     changeState = ()=>{
         this.setState({
             name:'Anki'
         })
     }
    render() {
        console.log("Lifecycle A")
        return (
            <div>
                <div>LifecycleA</div>
                <button onClick={this.changeState}>Chnage State</button>
                <LifecycleB/>
            </div>
           
        )
    }
}

export default LifecycleA
