import React, { useState } from 'react';
/* import Apples, { Bananas1, Orange } from './components/1-my-house';
import Jsx1 from './components/2-jsx/01-jsx';
import Jsx2 from './components/2-jsx/02-jsx';
import Jsx3 from './components/2-jsx/03-jsx';
import Jsx4 from './components/2-jsx/04-jsx';
import InlineStyling from './components/03-styles/01-inline-styling';
import InternalStyling from './components/03-styles/02-internal-styling';
import ExternalStyling from './components/03-styles/03-external-styling';
import ExternalModuleStyling from './components/03-styles/04-external-module-styling';
import SassScss from './components/03-styles/05-sass-scss';
import Digitaltime1 from './components/04-dijital-saat1/digitaltime';
import Greetings from './components/05-props/01-greetings';
import Products from './components/05-props/05-products';
import Digitaltime2 from './components/06-dijital-saat2/digitaltime2';
import Image from './components/07-images/01-image'; */
// import ImageGallery from './components/07-images/02-image-gallery';
// import ProfileCard from './components/08-card-profile/ProfileCard';
// import ClassicsBootstrap from './components/09-bootstrap/01-Classic';
import ModernBootstrap from './components/09-bootstrap/02-Modern';
import "./assets/scss/style.scss";
import ReactIcons from './components/10-icons/01-ReactIcons';
import Events from './components/11-events/events';
import ProductShop from './components/12-productShop/product-shop';

import State from './components/13-useState/State';
import Counter1 from './components/14-counter/Counter';
import Birthday from './components/15-birthday/Birthday';
import UseEffect from './components/16-useEffect/useeffect';
import { Button } from 'react-bootstrap';
import Digitaltime3 from './components/17-dijital-saat3/digitaltime3';
import FilterList  from './components/18-filter-list/FilterList';
import UseRef from './components/19-useRef/useref';
import ClassTurundeComponentler from './components/20-componentstype/1-class';
import FunctionComponet from './components/20-componentstype/2-function';
import Fetch from './components/21-Fetch/01-fetch';

const profileCardData = {
    name: "Emir",
    location: "New York",
    image: "person4.jpg",
    statistics: [
        { title: "Likes", stat: 145 },
        { title: "Photos", stat: 7 },
        { title: "Following", stat: 329 },
    ]
};
//import etmeyi unutmu bu klasor tum companentleri uzerinde bir html sayfasi gibi
export default function App() {
    const [show,setShow]= useState(true);


    return (
        <>
            {/* <Apples />
            <Bananas1 />
            <Orange />
            <Jsx1> </Jsx1>
            <br/>       
            <Jsx2></Jsx2>
            <br/>
            <Jsx3></Jsx3>
            <br/>
            <Jsx4/>
            <br/>
            <InlineStyling/>
            <br/>
            <InternalStyling/>
            <br/>
            <ExternalStyling/>
            <br/>
            <ExternalModuleStyling/>
            <br/>
            <SassScss/>
            <br/>
            <Digitaltime1/>

            <br/>
            <Greetings/>
            <br/>

            <Products/>
                
            <br />
            <br />

            <Digitaltime2 textColor = "white" bgColor = "cornflowerblue"/>
            <br />
            <Image/>
            <br />
            <ImageGallery/>  <ProfileCard name="Michael Bayram" location="Chicago,Illinois" />
            <ProfileCard {...profileCardData}/>
            <ClassicsBootstrap/><ModernBootstrap/>       <ReactIcons/>
            <Events/>
<ProductShop/>*/}

{/* <State/> */}
{/* 
<Counter1>
</Counter1> <Birthday/>*/}
{/* <Button onClick={()=>setShow(prev => !prev)}>
    use Effect hook'unu goster
</Button>
{ show && <UseEffect/>}<Digitaltime3/> <FilterList/>*/}
{/*             
            <UseRef/>
            <br />
            <ClassTurundeComponentler/>

            <br /> */}
            {/* <FunctionComponet/> */}

            <Fetch/>
        </>

    )
};