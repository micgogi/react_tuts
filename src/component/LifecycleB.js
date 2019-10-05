import React, { Component } from 'react'

export class LifecycleB extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name:'Rahul'
        }
        console.log("LifecycleB Constructor")
    }

    static getDerivedStateFromProps(props,state){
        console.log("lifecycleB derived fromstateProp")
        return  null
    }
    componentDidMount(){
        console.log('LifecycleB Compone dimount')
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log("LifecycleB  getSnapshotBeforeUpdate")
        return null
    }
     shouldComponentUpdate(){
         console.log("LifecyleB  ShouldComponentUpdata")
         return true
     }
     componentDidUpdate(){
         console.log('LifecycleB ComponentDidUpdate')
     }
    render() {
        console.log("LifecycleB")
        return (
            <div>
                LifecycleB
            </div>
           
        )
    }
}

export default LifecycleB
