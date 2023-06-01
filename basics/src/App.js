import React from 'react';
import Apples, { Bananas1, Orange } from './components/1-my-house';
import Jsx1 from './components/2-jsx/01-jsx';
import Jsx2 from './components/2-jsx/02-jsx';
import Jsx3 from './components/2-jsx/03-jsx';
import Jsx4 from './components/2-jsx/04-jsx';

//import etmeyi unutmu bu klasor tum companentleri uzerinde bir html sayfasi gibi
export default function App() {
    return (
        <>
            <Apples />
            <Bananas1 />
            <Orange />
            <Jsx1> </Jsx1>
            <Jsx2></Jsx2>
            <Jsx3></Jsx3>
            <Jsx4/>
        </>
    )
};