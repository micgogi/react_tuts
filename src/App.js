import React, { PureComponent } from 'react';
// import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet';
 import Welcome from './component/Welcome';
// import Hello from './component/Hello';
import FunctionClick from './component/FunctionClick';
import ClassClick from './component/ClassClick';
import EventBind from './component/EventBind';
import ParentComponent from './component/ParentComponent';
import UserGreeting from './component/UserGreeting';
import NameList from './component/NameList';
import Form from './component/Form';
import LifecycleA from './component/LifecycleA';
import Table from './component/Table';
import ParentComp from './component/ParentComp';
import RefsDemo from './component/RefsDemo';
function App() {
  return (
    <div className="App">
        {/* <ParentComponent/>
       <LifecycleA/> */}
       {/* <Fragment/> */}
       {/* <Table/> */
      }
      {/* <PaComponent/> */}
              {/* <ParentComp/>  */}
          <RefsDemo/>
        {/* <Greet name="Rahul"/>
        
         <Welcome name ="In class"/> */}
         {/* <Message/> */}
        {/* <Hello/>  */}
        {/* <FunctionClick/>
        <ClassClick/> */}
        {/* <EventBind/> */}
    </div>
  );
}

export default App;
