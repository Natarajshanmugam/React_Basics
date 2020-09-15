import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet  from './component/Greet';
import  Welcome  from './component/Welcome';
import Hello from './component/Hello';
import Message from './component/Message';
import Counter from './component/Counter';
import FunctionClick from './component/FunctionClick';
import ClassClick from './component/ClassClick';
import EventBind from './component/EventBind';
import ParentComponenet from './component/ParentComponenet';
import UserGreeting from './component/UserGreeting';
import NameList from './component/NameList'
import StyleSheet14 from './component/StyleSheet14'
import Inline15 from './component/Inline15'
import './component/Appstyle.css';
import Styles from './component/appStyles.module.css';
import Form from './component/Form';
import LifeCycle from './component/LifeCycleA'
import FragementDemo from './component/FragementDemo'
import Table from './component/Table'
import PureComp from './component/PureComp'
import ParentComp from './component/ParentComp'
import RefsDemo from './component/RefsDemo'
import FocusInput from './component/FocusInput'
import FRParentInput from './component/FRParentInput'
import PortalDemo from './component/PortalDemo'
import Hero from './component/Hero'
import ErrorBoundary from './component/ErrorBoundary'
import ClickCounter from './component/ClickCounter'
import HoverCounter from './component/HoverCounter'
import ClickCounterTwo from './component/ClickCounterTwo'
import HoverCounterTwo from './component/HoverCounterTwo'
import User from './component/User'
import CounterRenderProps from './component/CounterRenderProps'
import ComponentC from './component/ComponentC'
import {UserProvider} from './component/userContext'

class App extends React.Component{
  render(){
    return (
      // <h1> hello, {this.props.name}</h1>
      // <Welcome name={this.props.name} ></Welcome>
      // <Welcome name="Nataraj" Age="21"></Welcome>
      <div className="App">
       {/* <Greet name="Nataraj" > */}
         {/* <p>This is paragraph</p> */}
         {/* </Greet> */}
       {/* <Greet name="NandhaKumar"> */}
         {/* <button>Action</button> */}
       {/* </Greet> */}
      {/* <Welcome name="NATARAJ" /> */}
       {/* <Hello /> */}
       {/* <Message /> */}
       {/* <Counter /> */}
       {/* <FunctionClick /> */}
       {/* <ClassClick /> */}
       {/* <EventBind /> */}
       {/* <ParentComponenet /> */}
       {/* <UserGreeting /> */}
       {/* <NameList /> */}
       {/* <StyleSheet14 primary={true} /> */}
       {/* <Inline15 /> */}
       {/* <h1 className='error'>Error</h1> */}
       {/* <h1 className={Styles.success}>Success</h1> */}
       {/* <Form /> */}
       {/* <LifeCycle /> */}
       {/* <FragementDemo /> */}
       {/* <Table /> */}
       {/* <PureComp /> */}
       {/* <ParentComp /> */}
       {/* <RefsDemo /> */}
       
       {/* Pack One Day */}
       {/* <FocusInput /> */}
       {/* <FRParentInput /> */}
       {/* <PortalDemo /> */}
       {/* <ErrorBoundary>
       <Hero heroname="Batname" /></ErrorBoundary>
       <ErrorBoundary>
       <Hero heroname="Superman" /></ErrorBoundary>
       <ErrorBoundary>
       <Hero heroname="Joker" />
       </ErrorBoundary> */}

       {/* Higher Components */}
       {/* <ClickCounter name="Nataraj" />
       <HoverCounter />  */}
        {/* Pack One Day */}

       {/* <ClickCounterTwo />
       <HoverCounterTwo />
       <User render={(isLoogedIn) => isLoogedIn ? "nataraj":"Guest"} />
     */}
     {/* <CounterRenderProps>
       {(count,incrementCount) => (
     <ClickCounterTwo count={count} incrementcount={incrementCount} /> 
      )}
      </CounterRenderProps>  */}
     {/* <CounterRenderProps render={(count,incrementcount) => <HoverCounterTwo count={count} incrementcount={incrementcount}/> }/> */}

     {/* pack one Day */}
     <UserProvider value="Nataraj SS">
     <ComponentC />
     </UserProvider>
    
     {/* <ComponentC /> */}

     
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           {this.props.name}
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//       <Welcome name="Nataraj"/>
//     </div>
    
//   );
// }
// function App() {
//     return ( \
//     <div>
//        {/* <h1> hello, {this.props.name}</h1> */}
//       <Welcome name="Nataraj" ></Welcome>
//     </div>
//     );
// }

// function Welcome(props){
//   return <h1>hello ,{props.name}, Age , {props.Age}</h1>
// }
// class Welcome extends App{
//   render(){
//     return(
//       <h1> hello, {this.props.name}</h1>
//     );
//   }
// }

export default App;
