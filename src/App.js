import './App.css';
import BindingEventHandle from './BindingEventHandle';
import ClassComponent from './ClassComp';
import ClassEventHand from './ClassEventHand';
import Lifecycle from './ClassLifecycle/Lifecycle';
import ClassProps from './ClassProps';
import ClassState from './ClassState';
import ClassStateOne from './ClassStateOne';
import ConditionalRender from './ConditionalRender';
import ConditionalRender1 from './ConditionalRender1';
import ConditionalRender2 from './ConditionalRender2';
import ComponentC from './ContextApi/ComponentC';
import { UserProvider } from './ContextApi/UserContext';
import DestructingProps from './DestructingProps';
import FormHandling from './FormHandling';
import FuncProps from './FuncProps';
import FunctionalComp from './FunctionalComp';
import FunctionalEventHand from './FunctionalEventHand';
import EnhancedComments from './Hoc/Comments';
import Comments from './Hoc/Comments';
import EnhancedLikes from './Hoc/Likes';
import Likes from './Hoc/Likes';
import EffectHookCounter from './Hooks/EffectHookCounter';
import MouseReturn from './Hooks/MouseReturn';
import Useeffect from './Hooks/Useeffect';
import UseMemo from './Hooks/UseMemo';
import UseReducer from './Hooks/UseReducer';
import Usereducer1 from './Hooks/Usereducer1';
import Usestate from './Hooks/Usestate';
import UseState1 from './Hooks/UseState1';
import Listrender1 from './Listrender1';
import ListRendering from './ListRendering';
import NormalPureComponent from './NormalPureComponent';
import ParentMethod from './ParentMethodAsprops';
import Purecomponent from './Purecomponent';
import Reference from './Ref';
import ClickCounter from './renderprops/ClickCounter2';
import Counter from './renderprops/Counter';
import HoverCounter from './renderprops/HoverCounter2';
import User from './renderprops/User';
import SampleReact from './SampleReact';
import ReactSample from './ReactSample'


function App() {
  return (
    <div className="App">
      {/* <FunctionalComp /> */}
      {/* <ClassComponent /> */}
      {/* {/* <FuncProps name="Hari" id={15} /> */}
      {/* <ClassProps name="Ganesh" Designation="Oracle" id={152145} /> */}
      {/* <ClassState /> */}
      {/* <ClassStateOne /> */}
      {/* <DestructingProps name="Baran" Designation="Web Developer" /> */}
      {/* <FunctionalEventHand /> */}
      {/* <ClassEventHand /> */}
      {/* <BindingEventHandle /> */}
      {/* <ParentMethod  /> */}
      {/* <ConditionalRender /> */}
      {/* <ConditionalRender1 /> */}
      {/* <ConditionalRender2 /> */}
      {/* <ListRendering /> */}
      {/* <Listrender1 /> */}
      {/* <FormHandling /> */}
      {/* <SampleReact name="ganesh" department="It" /> */}
      {/* <ClickCounter />
      <HoverCounter />
      <User name={(isLoggedIn) => isLoggedIn ?  "hari" : "Baran"} /> */}
      {/* <Counter render={(count,incrementCount) => ( <ClickCounter count={count} incrementCount={incrementCount} /> )} />
      <Counter render={(count,incrementCount) => ( <HoverCounter count={count} incrementCount={incrementCount} /> )} /> */}
      {/* <NormalPureComponent />
      <Purecomponent /> */}
      {/* <Likes />
      <Comments /> */}
      {/* <EnhancedLikes />
      <EnhancedComments /> */}
      {/* <Reference /> */}
      {/* <Lifecycle /> */}
      {/* <UserProvider value="Hari">
      <ComponentC />
      </UserProvider> */}
      {/* <Usestate /> */}
      {/* <UseState1 /> */}
      {/* <Useeffect />
      <MouseReturn /> */}
      {/* <EffectHookCounter /> */}
      {/* <UseMemo /> */}
      {/* <UseReducer /> */}
      {/* <Usereducer1 /> */}
      <ReactSample />
    </div>
  );
}

export default App;
