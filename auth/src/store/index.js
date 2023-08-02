import { useContext, useReducer } from "react";
import { createContext } from "react";
import { counterReducer } from "./counter/counter-reducer";

//bos bir merkezi state olusturuldu
const StoreContext = createContext();


//componentlerde merkezi state e erisimi kolaylastirmak icin kendi hook umuzu yazdik
export const useStore = ()=> useContext(StoreContext);

export const StoreProvider = ({children}) =>{

//useReducer hook una reducer ve initialState parametre olarak verilir...
//useReducer fonksiyonu ise geriye setter ve getter lari doner

const [counterState, dispatchCounter] = useReducer(counterReducer, counterInitialState)


    return (
        <StoreContext.Provider value={{}}>
            {children}
        </StoreContext.Provider>
    )
}