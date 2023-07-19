import Image from "./components/09-image/Image";
import Gallery from "./components/09-image/gallery";
import HelloWorld from "./components/1-hello-world/HelloWorld";
import ProfileCard from "./components/10-profile-card/profile-card";
import BootstrapDynamic from "./components/11-bootstrap/bootstrap-dynamic";
import BootstrapStatic from "./components/11-bootstrap/bootstrap-static";
import JSX1 from "./components/3-JSX/JSX1";
import JSX2 from "./components/3-JSX/JSX2";
import JSX3 from "./components/3-JSX/JSX3";
import JSX4 from "./components/3-JSX/JSX4";
import JSX5 from "./components/3-JSX/JSX5";
import JSX6 from "./components/3-JSX/JSX6";
import Style1 from "./components/4-styles/style1";
import Style2 from "./components/4-styles/style2";
import Style3 from "./components/4-styles/style3";
import Style4 from "./components/4-styles/style4";
import Clock1 from "./components/5-clock1/Clock1";
import Greetings from "./components/6-props-1/Greetings";
import Products from "./components/7-props-2/Products";
import Clock2 from "./components/8-clock2/Clock2";
import Icon from "./components/12-icons/icon";
import Events from "./components/13-events/events";
import Shop from "./components/14-products/shop";
import JSX7 from "./components/3-JSX/JSX7";
import Stateless from "./components/15-useState/stateless";
import State from "./components/15-useState/state";
import Counter from "./components/16-counter/counter";
import Birthday from "./components/17-birthday/birthday";
import ProgressBarExample from "./components/17-progress-bar/progressbar";
import UseEffect1 from "./components/18-useEffect/useeffect1";
import Clock3 from "./components/19-clock3/Clock3";
import UseEffect2 from "./components/18-useEffect/useEffect2";
import CountryFilter from "./components/20-country-filter/country-filter";
import UseRef from "./components/21-useRef/useref";
import Scroll from "./components/21-useRef/scroll";
import ClassComp from "./components/22-class-type/class-comp";
import UserCards from "./components/23-fetch-users/usercards";
import Countries from "./components/24-axios/countries";
import ParentComp from "./components/25-child-to-parent/parent-comp";
import Form1 from "./components/26-forms/form1";
import Form2 from "./components/26-forms/form2";
import Form3 from "./components/26-forms/form3";
import Form4 from "./components/26-forms/form4";
import Form5 from "./components/26-forms/form5";
import Form6 from "./components/26-forms/form6";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Header from "./components/00-home/header/header";
import Menu from "./components/00-home/menu/menu";
import HelloReact from "./components/2-hello-react/HelloReact";

const App = () => {
  //compononets names should start with capital letter
  return (
    <BrowserRouter>
    <Header/>
    <Container fluid>
      <Row>
        <Col sm={2}>
        <Menu/>
        </Col>
        <Col sm={10}>
    <Routes>
      <Route path="/hello-world" element={<HelloWorld/>}/>
      <Route path="/hello-react" element={<HelloReact/>}/>
      <Route path="/jsx1" element={<JSX1/>}/>
      <Route path="/jsx2" element={<JSX2/>}/>
      <Route path="/jsx3" element={<JSX3/>}/>
      <Route path="/jsx4" element={<JSX4/>}/>
      <Route path="/jsx5" element={<JSX5/>}/>
    </Routes>
        </Col>
      </Row>
    </Container>
      {/*   
            <JSX6/>
            <Style1/>
            <Style2/>
            <Style3/>
            <Style4/>
  <Clock1/>
  <Greetings/>
  <Products/>  
  <Clock2 textColor="crimson" bgColor="cornflowerblue" />
  <Image/> <Gallery/>
  <ProfileCard avatar ="profile.jpg" name="Bayram Soltanov" location="Turkey, Istanbul" followers="1M" following="67" shot="18"/>
  <BootstrapStatic/>
  <BootstrapDynamic/>
  <Icon/>
  <Events/>
  <Shop/>
  <JSX7/>
  <Stateless/>
  <State/> 
  <Counter/>
  <Birthday/>
  <ProgressBarExample/>
  <UseEffect1/>
<Clock3/> 
<UseEffect2/>
<CountryFilter/>
<UseRef/>
<Scroll/>
<ClassComp/>
<UserCards/>
<Countries/>
<ParentComp/>
<Form1/>
<Form2/>
<Form3/>
<Form4/>
<Form5/>
<Form6/>
*/}




    </BrowserRouter>
  );
};

export default App;
