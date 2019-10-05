import React, { Component } from 'react'

 class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:false
        }
    }
    
    render() {
        if(this.state.isLoggedIn){
            return(
                <div>Welcome Rahul</div>
            )
        }else{
            return(
                <div>Welcome Anki</div>
            )
        }
        // return (
        //     <div>
        //     <div>
        //         Welcome Rahul
        //     </div>
        //     <div>Welcome guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting
