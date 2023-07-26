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
import StoreContext from "./store";
import Exchange from "./components/27-context-api/exchange";
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  //compononets names should start with capital letter
  const [counter, setCounter] = useState(10);
  const [currencies, setcurrencies] = useState({});  

  const loadData = async () => {
  try {
    const resp = await axios.get("https://api.frankfurter.app/latest?from=TRY");
    setcurrencies(resp.data.rates);
  } catch (error) {
    console.log(error)
  }
   }

   useEffect(()=>{
    loadData();
   },[])


  return (
    <StoreContext.Provider value={{counter, setCounter, currencies}}>
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
      <Route path="/jsx6" element={<JSX6/>}/>
      <Route path="/style1" element={<Style1/>}/>
      <Route path="/style2" element={<Style2/>}/>
      <Route path="/style3" element={<Style3/>}/>
      <Route path="/style4" element={<Style4/>}/>
      <Route path="/clock1" element={<Clock1/>}/>
      <Route path="/greetings" element={<Greetings/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/clock2" element={<Clock2 textColor="crimson" bgColor="cornflowerblue" />}/>
      <Route path="/image" element={<Image/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="/profilecard" element={<ProfileCard avatar ="profile.jpg" name="Bayram Soltanov" location="Turkey, Istanbul" followers="1M" following="67" shot="18"/>}/>
      <Route path="/bootstrapstatic" element={<BootstrapStatic/>}/>
      <Route path="/bootstrapdynamic" element={<BootstrapDynamic/>}/>
      <Route path="/icon" element={<Icon/>}/>
      <Route path="/events" element={<Events/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/jsx7" element={<JSX7/>}/>
      <Route path="/stateless" element={<Stateless/>}/>
      <Route path="/state" element={<State/>}/>
      <Route path="/counter" element={<Counter/>}/>
      <Route path="/birthday" element={<Birthday/>}/>
      <Route path="/progressbarexample" element={<ProgressBarExample/>}/>
      <Route path="/useeffect1" element={<UseEffect1/>}/>
      <Route path="/clock3" element={<Clock3/>}/>
      <Route path="/useeffect2" element={<UseEffect2/>}/>
      <Route path="/countryfilter" element={<CountryFilter/>}/>
      <Route path="/useref" element={<UseRef/>}/>
      <Route path="/scroll" element={<Scroll/>}/>
      <Route path="/classcomp" element={<ClassComp/>}/>
      <Route path="/usercards" element={<UserCards/>}/>
      <Route path="/countries" element={<Countries/>}/>
      <Route path="/parentcomp" element={<ParentComp/>}/>
      <Route path="/form1" element={<Form1/>}/>
      <Route path="/form2" element={<Form2/>}/>
      <Route path="/form3" element={<Form3/>}/>
      <Route path="/form4" element={<Form4/>}/>
      <Route path="/form5" element={<Form5/>}/>
      <Route path="/form6" element={<Form6/>}/>
      <Route path="/exchange" element={<Exchange/>}/>

    </Routes>
        </Col>
      </Row>
    </Container>
    </BrowserRouter>
    </StoreContext.Provider>
  );
};

export default App;
