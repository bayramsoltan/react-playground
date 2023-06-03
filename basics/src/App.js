import React from 'react';
import Apples, { Bananas1, Orange } from './components/1-my-house';
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

//import etmeyi unutmu bu klasor tum companentleri uzerinde bir html sayfasi gibi
export default function App() {
    return (
        <>
            <Apples />
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
        </>
    )
};