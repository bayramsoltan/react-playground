import Image from "./components/09-image/Image";
import Gallery from "./components/09-image/gallery";
import HelloWorld from "./components/1-hello-world/HelloWorld";
import ProfileCard from "./components/10-profile-card/profile-card";
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
const App = () => {
  //compononets names should start with capital letter
  return (
    <div>
      {/*   <HelloWorld/>
            <JSX1/>
            <JSX2/> 
            <JSX3/>
            <JSX4/>
            <JSX5/>
            <JSX6/>
            <Style1/>
            <Style2/>
            <Style3/>
            <Style4/>
  <Clock1/>
  <Greetings/>
  <Products/>  
  <Clock2 textColor="crimson" bgColor="cornflowerblue" />
  <Image/> <Gallery/>*/}
   <ProfileCard/>
    </div>
  );
};

export default App;
